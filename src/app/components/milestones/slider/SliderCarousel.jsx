"use client";

import { Stack, Image, Divider, Text, Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useState, useCallback, useEffect } from "react";

import { basePath } from "../../../../../next.config";

const CarouselCard = ({ entryData }) => {
  return (
    <Stack h="100%">
      <Text className="!text-xl !font-bold text-center">{entryData.title}</Text>
      <Divider my="sm" />
      <div className="h-[80%]">
        <Image
          src={`${basePath}/${entryData.imgUrl}`}
          h="100%"
          fit="contain"
          alt={`Image of ${entryData.title}`}
        />
      </div>
    </Stack>
  );
};

const SliderCarousel = ({ yearData }) => {
  const [embla, setEmbla] = useState(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleDescChange = useCallback(() => {
    if (!embla) {
      return;
    }
    setSelectedSlide(embla.selectedScrollSnap());
  }, [embla, setSelectedSlide]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleDescChange);
    }
  }, [embla, handleDescChange]);

  useEffect(() => {
    setSelectedSlide(0);
  }, [yearData, setSelectedSlide]);

  useEffect(() => {
    console.log(`selected slide : ${selectedSlide}`);
  }, [selectedSlide]);

  if (yearData.length == 0) {
    return (
      <Text className="text-center !text-lg">
        {"Uh Oh... Seems it wasn't very eventful this year :)"}
      </Text>
    );
  }

  return (
    <Flex
      align="center"
      direction={{ base: "column", xl: "row" }}
      columnGap="xl"
      rowGap={{ base: "xs" }}
      justify={{ base: "flex-start" }}
      wrap="nowrap"
      mx="auto"
    >
      <Carousel
        orientation="vertical"
        height={600}
        slideSize="100%"
        slideGap={"xl"}
        align={"start"}
        controlSize={36}
        controlsOffset={"xl"}
        withIndicators
        classNames={{
          indicator: "!bg-orange-500",
          indicators: "w-[99%]",
          control: "!border-transparent !bg-transparent",
        }}
        getEmblaApi={setEmbla}
        loop
        w={{ base: "90%", xl: "65%" }}
      >
        {yearData.map((entry, index) => {
          return (
            <Carousel.Slide key={index} h="100%">
              <CarouselCard entryData={entry} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <Text className="!text-lg !text-center" w={{ base: "90%", xl: "35%" }}>
        {yearData[selectedSlide].desc}
      </Text>
    </Flex>
  );
};

export default SliderCarousel;
