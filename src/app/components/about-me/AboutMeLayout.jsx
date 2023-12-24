"use client";

import { SimpleGrid, ScrollArea, Text, Image } from "@mantine/core";

import Education from "@/app/components/about-me/Education";
import WorkEx from "@/app/components/about-me/WorkEx";
import TechKnowledge from "@/app/components/about-me/TechKnowledge";
import ResearchInterests from "@/app/components/about-me/ResearchInterests";
import Hobbies from "@/app/components/about-me/Hobbies";

import { basePath } from "../../../../next.config";

const AboutMeLayout = (props) => {
  const divList = [
    ["Education", "test_bg.png", Education],
    ["Work Experience", "test_bg.png", WorkEx],
    ["Tech Knowledge", "test_bg.png", TechKnowledge],
    ["Research Interests", "test_bg.png", ResearchInterests],
    ["Hobbies", "test_bg.png", Hobbies],
  ];

  return (
    <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }}>
      {divList.map((value, index) => {
        const title = value[0];
        const bgImage = value[1];
        const DataElement = value[2];
        return (
          <ScrollArea key={index} h={400} type="hover">
            <Image
              w="200px"
              src={`${basePath}/images/${bgImage}`}
              className="fixed"
              style={{ zIndex: -1, filter: "blur(1px) opacity(30%)" }}
              h="auto"
              alt=""
            />
            <Text>{title}</Text>
            <DataElement />
          </ScrollArea>
        );
      })}
    </SimpleGrid>
  );
};

export default AboutMeLayout;
