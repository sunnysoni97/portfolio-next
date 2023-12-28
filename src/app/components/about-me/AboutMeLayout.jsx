"use client";

import {
  SimpleGrid,
  ScrollArea,
  Text,
  Image,
  Divider,
  Paper,
} from "@mantine/core";

import Education from "@/app/components/about-me/Education";
import WorkEx from "@/app/components/about-me/WorkEx";
import TechKnowledge from "@/app/components/about-me/TechKnowledge";
import ResearchInterests from "@/app/components/about-me/ResearchInterests";
import Hobbies from "@/app/components/about-me/Hobbies";

import { basePath } from "../../../../next.config";
import CheckMobile from "@/app/components/common/CheckMobile";

const AboutMeLayout = (props) => {
  const isMobile = CheckMobile();
  const divList = [
    ["Education", "education.png", Education],
    ["Work Experience", "experience.png", WorkEx],
    ["Tech Knowledge", "tech.png", TechKnowledge],
    ["Research Interests", "research.png", ResearchInterests],
    ["Hobbies", "hobbies.png", Hobbies],
  ];

  return (
    <SimpleGrid
      cols={{ base: 1, lg: 2 }}
      spacing="xl"
      mx="auto"
      w={isMobile ? "95%" : "90%"}
    >
      {divList.map((value, index) => {
        const title = value[0];
        const bgImage = value[1];
        const DataElement = value[2];
        return (
          <ScrollArea
            key={index}
            h={400}
            maw={650}
            type="hover"
            classNames={{ root: "shadow-md rounded-lg" }}
            p="md"
          >
            <Image
              w="100px"
              src={`${basePath}/images/about-me/bg/${bgImage}`}
              style={{
                zIndex: -1,
                filter: "blur(0.5px) opacity(30%)",
                position: "absolute",
                right: "1em",
                top: "5em",
              }}
              h="auto"
              alt=""
            />
            <Text className="!text-xl !font-bold">{title}</Text>
            <Divider my="md" />
            <DataElement />
          </ScrollArea>
        );
      })}
    </SimpleGrid>
  );
};

export default AboutMeLayout;
