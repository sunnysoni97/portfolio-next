from pathlib import Path
import os
import json
from typing import List, Callable
import sys

JSON_KEYS = ["title", "desc", "imgUrl", "repoUrl", "highlight"]
FILE_PATH = Path(os.path.dirname(__file__)).parent
FILE_PATH = FILE_PATH.joinpath("app", "projects", "_posts", "project_list.json")


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


def write_list(json_obj: List[dict]) -> bool:
    try:
        with open(FILE_PATH, "wt") as f:
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


def add_project(json_data: List[dict]) -> None:
    try:
        new_project = {}
        for key in JSON_KEYS:
            new_project[key] = input(f"{key} : ")
        new_project["highlight"] = json.loads(new_project["highlight"].lower())
        json_data.append(new_project)
        write_list(json_obj=json_data)
    except Exception as ex:
        print(f"failed to add : {ex}")
    finally:
        return


def view_list(json_data: List[dict]) -> None:
    print("List of Projects : ")
    i = 0
    for proj in json_data:
        print(f'No.: {i}, Title : {proj["title"]}')
        i += 1
    return


def edit_project(json_data: List[dict]):
    try:
        proj_n = int(input("Select project to edit (n): "))
        if proj_n >= 0 and proj_n < len(json_data):
            old_proj = json_data[proj_n]
            print(f"Old details : {old_proj}")
            print(f"Enter new details (leave the input key blank for no change) : ")
            for key in JSON_KEYS:
                new_key = input(f"{key} : ")
                if len(new_key) > 0:
                    json_data[proj_n][key] = new_key
            write_list(json_obj=json_data)
    except Exception as ex:
        print(f"failed to edit : {ex}")
    finally:
        return


def reorder_list(json_data: List[dict]):
    try:
        proj_n = int(input("Select project number to reorder : "))
        if proj_n >= 0 and proj_n < len(json_data):
            new_n = int(input("Select new position : "))
            if new_n >= 0 and new_n < len(json_data) and new_n != proj_n:
                proj = json_data.pop(proj_n)
                json_data.insert(new_n, proj)
                write_list(json_obj=json_data)
    except Exception as ex:
        print(f"failed to reorder : {ex}")
    finally:
        return


def del_project(json_data: List[dict]):
    try:
        proj_n = int(input("Select project number to delete : "))
        if proj_n >= 0 and proj_n < len(json_data):
            confirm = input("Are you sure ? (y/n) : ")
            if confirm == "y" or confirm == "Y":
                json_data.pop(proj_n)
                write_list(json_obj=json_data)
    except Exception as ex:
        print(f"failed to delete : {ex}")
    finally:
        return


def exit(json_data: List[dict]):
    print("exiting program")
    sys.exit(0)


MENU_OPTS = ["Add", "View", "Edit", "Reorder", "Delete", "Exit"]
MENU_FUNCS = [add_project, view_list, edit_project, reorder_list, del_project, exit]

if __name__ == "__main__":
    json_data = create_or_read_list(json_path=FILE_PATH)

    while True:
        func = handle_menu(menu_options=MENU_OPTS, menu_functions=MENU_FUNCS)
        func(json_data=json_data)
