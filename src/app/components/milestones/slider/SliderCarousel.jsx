"use client";

import { Stack, Image, Text, Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useState, useCallback, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { InnerShadowBottom, InnerShadowTop } from "tabler-icons-react";

import { basePath } from "../../../../../next.config";
import CheckMobile from "@/app/components/common/CheckMobile";
import GetMonthStr from "@/app/components/common/GetMonthStr";

const CarouselCard = ({ entryData }) => {
  const isMobile = CheckMobile();
  return (
    <Stack h="100%" gap={isMobile ? 0 : "md"}>
      <Text className="!text-lg !font-bold text-center">{entryData.title}</Text>
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

const SliderCarousel = ({ yearData, selectedSlide, setSelectedSlide }) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const [embla, setEmbla] = useState(null);
  const isMobile = CheckMobile();

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
        height={isMobile ? 300 : 500}
        slideSize="100%"
        controlSize={36}
        controlsOffset="lg"
        withIndicators
        classNames={{
          indicator: "!bg-orange-500",
          indicators: "w-[99%]",
          control: "!border-transparent !bg-transparent !shadow-none",
          controls: "h-[80%] top-[10%]",
        }}
        getEmblaApi={setEmbla}
        loop
        w={{ base: "100%", xl: "65%" }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          <InnerShadowBottom
            color={"rgb(154 52 18)"}
            strokeWidth={2}
            opacity={0.6}
            size={isMobile ? 24 : 32}
          />
        }
        previousControlIcon={
          <InnerShadowTop
            color={"rgb(154 52 18)"}
            strokeWidth={2}
            opacity={0.6}
            size={isMobile ? 24 : 32}
          />
        }
      >
        {yearData.map((entry, index) => {
          return (
            <Carousel.Slide key={index} h="100%">
              <CarouselCard entryData={entry} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <Stack w={{ base: "100%", xl: "35%" }}>
        <Text className="!text-base !text-center">
          {yearData[selectedSlide].desc}
          <br />
          <Text className="opacity-50 inline !text-sm !font-bold">
            ({GetMonthStr(yearData[selectedSlide].month)})
          </Text>
        </Text>
      </Stack>
    </Flex>
  );
};

export default SliderCarousel;
