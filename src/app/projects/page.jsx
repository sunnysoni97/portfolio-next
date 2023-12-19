import Link from "next/link";

import ProjectGallery from "@/app/components/projects/ProjectGallery";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <text className="text-lg block">
        {
          "On this page, you can find a list of some of the interesting works I have been a part of. These works are available publicly through my "
        }
        <Link
          href="https://github.com/sunnysoni97"
          className="text-blue-500 no-underline"
        >
          {"GitHub profile"}
        </Link>
        {
          ". If some work catches your eye, feel free to check it out in details."
        }
      </text>
      <br />
      <h2 className="text-2xl font-bold block">{"Full List"}</h2>
      <br />
      <ProjectGallery />
    </>
  );
}
