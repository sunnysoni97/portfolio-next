"use client";

import { SimpleGrid } from "@mantine/core";

import ProjectCard from "@/app/components/projects/ProjectCard";
import LoadProjects from "@/app/components/projects/LoadProjects";

const ProjectGallery = (props) => {
  const project_list = LoadProjects();

  return (
    <SimpleGrid
      cols={{ base: 1, md: 2, lg: 3, xl: 4 }}
      verticalSpacing={{ base: "md", sm: "xl" }}
      spacing={{ base: "md", sm: "lg" }}
      mx="auto"
      w={{ base: "90%", sm: "100%" }}
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
    </SimpleGrid>
  );
};

export default ProjectGallery;
