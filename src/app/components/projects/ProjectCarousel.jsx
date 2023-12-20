"use client";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Group, Stack, Image, Button, Paper } from "@mantine/core";
import { InnerShadowLeft, InnerShadowRight } from "tabler-icons-react";
import { useRouter } from "next/navigation";

import CheckMobile from "@/app/components/common/CheckMobile";
import LoadProjects from "@/app/components/projects/LoadProjects";

import { basePath } from "../../../../next.config";

const CarouselSlide = ({ title, desc, imgUrl, repoUrl }) => {
  const router = useRouter();

  return (
    <Paper w="100%" h="100%" radius={"lg"} withBorder className="!shadow-inner">
      <Group
        h="100%"
        w="100%"
        align="stretch"
        wrap="nowrap"
        justify="space-around"
        gap="xs"
      >
        <Stack h="100%" align="center" w="50%" justify="center">
          <Image
            classNames={{ root: "!rounded-l-lg" }}
            src={`${basePath}/${imgUrl}`}
            height="100%"
            alt={`Banner image of Project : ${desc}`}
            opacity={0.8}
            fit="cover"
          />
        </Stack>
        <Stack h="100%" align="stretch" w="50%" justify="flex-start" px="xs">
          <div className="flex h-[20%] justify-start items-start pt-6">
            <text className="text-xl font-bold">{title}</text>
          </div>
          <div className="flex h-[65%] items-start py-6">
            <text className="text-justify text-lg">
              {`${desc.slice(0, 100)}...`}
            </text>
          </div>
          <div className="flex h-[15%] justify-center items-center">
            <Button
              onClick={() => {
                router.push(repoUrl);
              }}
              variant="transparent"
              size="compact-md"
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
      controlsOffset={isMobile ? "md" : "sm"}
      align="center"
      loop
      withIndicators
      w={{ sm: 640, md: 768, lg: 1024 }}
      mx="auto"
      classNames={{ indicator: "!bg-orange-500", indicators: "w-[50%]" }}
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
