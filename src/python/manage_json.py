from pathlib import Path
import os
import json
from typing import List, Callable
import sys
import argparse


def create_or_read_list(json_path: Path) -> List[dict]:
    json_data = []
    if Path.exists(json_path):
        with open(json_path, "rb") as f:
            json_data = json.load(f)
    else:
        if not Path.exists(json_path.parent):
            os.makedirs(json_path.parent)
        with open(json_path, "wt") as f:
            json.dump(json_data, f)
    return json_data


def write_list(json_obj: List[dict], file_path: Path) -> bool:
    try:
        with open(file_path, "wt") as f:
            json.dump(json_obj, f)
        return True
    except Exception as ex:
        return False


def handle_menu(menu_options, menu_functions) -> Callable:
    print("-----MAIN MENU-----")
    for i in range(len(menu_options)):
        print(f"{i} -> {menu_options[i]}")
    choice = int(input("Enter choice (n): "))
    print("-------------------")

    if choice >= 0 and choice < len(menu_options):
        return menu_functions[choice]
    else:
        return handle_menu(menu_options=menu_options, menu_functions=menu_functions)


def add_project(json_keys: List[str], file_path: Path) -> None:
    try:
        json_data = create_or_read_list(json_path=file_path)
        new_project = {}
        for key in json_keys:
            new_value = input(f"{key} : ")
            if new_value == "":
                new_value = "1"
            new_project[key] = new_value
        if "highlight" in json_keys:
            if new_project["highlight"] == "1":
                new_project["highlight"] = "false"
            new_project["highlight"] = json.loads(new_project["highlight"].lower())
        json_data.append(new_project)
        write_list(json_obj=json_data, file_path=file_path)
    except Exception as ex:
        print(f"failed to add : {ex}")
    finally:
        return


def view_list(json_keys: List[str], file_path: Path) -> None:
    json_data = create_or_read_list(json_path=file_path)
    print("List of Projects : ")
    i = 0
    for proj in json_data:
        print(f'No.: {i}, Title : {proj["title"]}')
        i += 1
    return


def edit_project(json_keys: List[str], file_path: Path) -> None:
    try:
        json_data = create_or_read_list(json_path=file_path)
        proj_n = int(input("Select project to edit (n): "))
        if proj_n >= 0 and proj_n < len(json_data):
            old_proj = json_data[proj_n]
            print(f"Old details : {old_proj}")
            print(f"Enter new details (leave the input key blank for no change) : ")
            for key in json_keys:
                new_key = input(f"{key} : ")
                if len(new_key) > 0:
                    json_data[proj_n][key] = new_key
                    if key == "highlight":
                        json_data[proj_n][key] = json.loads(
                            json_data[proj_n][key].lower()
                        )
            write_list(json_obj=json_data, file_path=file_path)
    except Exception as ex:
        print(f"failed to edit : {ex}")
    finally:
        return


def reorder_list(json_keys: List[str], file_path: Path) -> None:
    try:
        json_data = create_or_read_list(json_path=file_path)
        proj_n = int(input("Select project number to reorder : "))
        if proj_n >= 0 and proj_n < len(json_data):
            new_n = int(input("Select new position : "))
            if new_n >= 0 and new_n < len(json_data) and new_n != proj_n:
                proj = json_data.pop(proj_n)
                json_data.insert(new_n, proj)
                write_list(json_obj=json_data, file_path=file_path)
    except Exception as ex:
        print(f"failed to reorder : {ex}")
    finally:
        return


def del_project(json_keys: List[str], file_path: Path) -> None:
    try:
        json_data = create_or_read_list(json_path=file_path)
        proj_n = int(input("Select project number to delete : "))
        if proj_n >= 0 and proj_n < len(json_data):
            confirm = input("Are you sure ? (y/n) : ")
            if confirm == "y" or confirm == "Y":
                json_data.pop(proj_n)
                write_list(json_obj=json_data, file_path=file_path)
    except Exception as ex:
        print(f"failed to delete : {ex}")
    finally:
        return


def exit(json_keys: List[str], file_path: Path) -> None:
    print("exiting program")
    sys.exit(0)


MENU_OPTS = ["Add", "View", "Edit", "Reorder", "Delete", "Exit"]
MENU_FUNCS = [add_project, view_list, edit_project, reorder_list, del_project, exit]

FILE_DIR = Path(os.path.dirname(__file__)).parent

tgt_list = [
    "projects",
    "milestones_timeline",
    "milestones_slider",
    "aboutme_workex",
    "aboutme_edu",
]

parser = argparse.ArgumentParser()
parser.add_argument("--target", type=str, default="projects", choices=tgt_list)


if __name__ == "__main__":
    args = parser.parse_args()
    tgt = args.target

    tgt_idx = tgt_list.index(tgt)
    tgt_paths = [
        Path("projects", "_posts", "project_list.json"),
        Path("milestones", "_posts", "timeline_data.json"),
        Path("milestones", "_posts", "slider_data.json"),
        Path("about-me", "_posts", "work_ex.json"),
        Path("about-me", "_posts", "edu_data.json"),
    ]
    tgt_json_keys = [
        ["title", "subHead", "desc", "imgUrl", "repoUrl", "highlight"],
        ["year", "title", "desc"],
        ["year", "month", "title", "desc", "imgUrl"],
        [
            "start_year",
            "start_month",
            "end_year",
            "end_month",
            "title",
            "employer",
            "desc",
        ],
        [
            "start_year",
            "start_month",
            "end_year",
            "end_month",
            "title",
            "subject",
            "instituition",
            "location",
            "gpa",
        ],
    ]

    json_keys = tgt_json_keys[tgt_idx]
    file_path = Path.joinpath(FILE_DIR, "app", tgt_paths[tgt_idx])

    json_data = create_or_read_list(json_path=file_path)

    while True:
        func = handle_menu(menu_options=MENU_OPTS, menu_functions=MENU_FUNCS)
        func(json_keys=json_keys, file_path=file_path)
