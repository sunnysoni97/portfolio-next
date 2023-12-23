"use client";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Group, Stack, Image, Button, Paper, Text } from "@mantine/core";
import { InnerShadowLeft, InnerShadowRight } from "tabler-icons-react";
import { useRouter } from "next/navigation";

import CheckMobile from "@/app/components/common/CheckMobile";
import LoadProjects from "@/app/components/projects/LoadProjects";

import { basePath } from "../../../../next.config";

const CarouselSlide = ({ title, desc, imgUrl, repoUrl }) => {
  const router = useRouter();
  const isMobile = CheckMobile();

  return (
    <Paper w="100%" h="100%" radius={"lg"} withBorder className="!shadow-inner">
      <Group
        h={{ base: 300, md: 400, lg: 500 }}
        align="stretch"
        wrap="nowrap"
        gap="xs"
        justify="space-between"
      >
        <Image
          classNames={{ root: "!rounded-l-lg" }}
          src={`${basePath}/${imgUrl}`}
          alt={`Banner image of Project : ${desc}`}
          w={isMobile ? "40%" : "50%"}
          fit="cover"
        />

        <Stack justify="flex-start" px="xs" w={isMobile ? "60%" : "50%"}>
          <div
            className={`${
              isMobile ? "h-[15%] pt-2" : "h-[20%] pt-6"
            }  flex justify-start items-start`}
          >
            <Text
              className={`${isMobile ? "!text-base" : "!text-xl"} !font-bold`}
            >
              {title}
            </Text>
          </div>
          <div
            className={`${
              isMobile ? "h-[70%] py-2" : "h-[65%] py-6"
            } flex  items-start `}
          >
            <Text
              className={`${
                isMobile ? "!text-base" : "!text-lg"
              } !text-justify`}
            >
              {`${isMobile ? desc.slice(0, 40) : desc.slice(0, 100)}...`}
            </Text>
          </div>
          <div className="flex h-[15%] justify-center items-center">
            <Button
              onClick={() => {
                router.push(repoUrl);
              }}
              variant="transparent"
              size={isMobile ? "compact-sm" : "compact-md"}
            >
              {"Check It Out!"}
            </Button>
          </div>
        </Stack>
      </Group>
    </Paper>
  );
};

const ProjectCarousel = (props) => {
  const autoplay = useRef(Autoplay({ delay: 6000 }));
  const isMobile = CheckMobile();
  const projectList = LoadProjects();

  const highlightList = [];

  if (projectList.length > 0) {
    for (const project of projectList) {
      if (project["highlight"] == true) {
        highlightList.push(project);
      }
    }
  }

  return (
    <Carousel
      slideSize="100%"
      controlSize={isMobile ? 24 : 36}
      nextControlIcon={
        <InnerShadowRight
          size={isMobile ? 24 : 36}
          strokeWidth={2}
          color={"rgb(154 52 18)"}
          opacity={0.5}
        />
      }
      previousControlIcon={
        <InnerShadowLeft
          size={isMobile ? 24 : 36}
          strokeWidth={2}
          color={"rgb(154 52 18)"}
          opacity={0.6}
        />
      }
      controlsOffset={isMobile ? "sm" : "md"}
      align="center"
      loop
      withIndicators
      w={{ sm: 640, md: 768, lg: 1024 }}
      mx="auto"
      classNames={{
        indicator: "!bg-orange-500",
        indicators: isMobile ? "w-[40%]" : "w-[50%]",
        control: "!border-transparent !bg-transparent !shadow-none",
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {highlightList.map((proj, index) => {
        return (
          <Carousel.Slide key={index}>
            <CarouselSlide
              title={proj.title}
              desc={proj.desc}
              imgUrl={proj.imgUrl}
              repoUrl={proj.repoUrl}
            />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default ProjectCarousel;
