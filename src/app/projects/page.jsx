import Link from "next/link";

import { Text } from "@mantine/core";

import ProjectGallery from "@/app/components/projects/ProjectGallery";
import ProjectCarousel from "@/app/components/projects/ProjectCarousel";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Text>
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
      </Text>
      <br />
      <h2 className="text-xl font-bold">{"Spotlight"}</h2>
      <br />
      <ProjectCarousel />
      <br />
      <h2 className="text-xl font-bold">{"List of Projects"}</h2>
      <br />
      <ProjectGallery />
    </>
  );
}
