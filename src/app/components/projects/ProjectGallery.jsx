"use client";

import { Flex } from "@mantine/core";

import CheckMobile from "@/app/components/common/CheckMobile";
import ProjectCard from "@/app/components/projects/ProjectCard";
import LoadProjects from "@/app/components/projects/LoadProjects";

const ProjectGallery = (props) => {
  const isMobile = CheckMobile();
  const fakeDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const project_list = LoadProjects();

  return (
    <Flex
      align={isMobile ? "center" : "flex-start"}
      direction={{ base: "column", md: "row" }}
      columnGap={{ base: "xl" }}
      rowGap={{ base: "xl" }}
      justify={{ base: "flex-start" }}
      wrap="wrap"
      className={`w-[80%] mx-auto`}
    >
      {project_list.map((proj, index) => {
        return (
          <ProjectCard
            key={index}
            title={proj.title}
            desc={proj.desc}
            imgUrl={proj.imgUrl}
            repoUrl={proj.repoUrl}
          />
        );
      })}
    </Flex>
  );
};

export default ProjectGallery;
