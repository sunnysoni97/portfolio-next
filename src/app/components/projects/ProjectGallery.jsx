"use client";

import { Flex } from "@mantine/core";

import CheckMobile from "@/app/components/common/CheckMobile";
import ProjectCard from "@/app/components/projects/ProjectCard";

const ProjectGallery = (props) => {
  const isMobile = CheckMobile();
  const fakeDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

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
      {[...Array(5)].map((_, index) => {
        return <ProjectCard key={index} desc={fakeDesc} />;
      })}
    </Flex>
  );
};

export default ProjectGallery;
