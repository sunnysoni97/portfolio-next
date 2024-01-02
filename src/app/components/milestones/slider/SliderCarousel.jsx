"use client";

import { Stack, Image, Text, Flex, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [modalData, setModalData] = useState({});
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
    if (!embla) {
      return;
    }
    setSelectedSlide(0);
    embla.scrollTo(0);
  }, [yearData, setSelectedSlide, embla]);

  if (yearData.length == 0) {
    return (
      <Text className="text-center">
        {
          "Unfortunately, I don't have any photos to exhibit this year. The summary is in the overview."
        }
      </Text>
    );
  }

  return (
    <>
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
          controlsOffset="sm"
          withIndicators
          classNames={{
            indicator: "!bg-orange-500",
            indicators: "w-[99%]",
            control: "!border-transparent !bg-transparent !shadow-none",
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
              opacity={0.4}
              size={isMobile ? 24 : 32}
            />
          }
        >
          {yearData.map((entry, index) => {
            return (
              <Carousel.Slide
                key={index}
                h="100%"
                onClick={() => {
                  setModalData(entry);
                  open();
                }}
              >
                <CarouselCard entryData={entry} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <Stack w={{ base: "100%", xl: "35%" }}>
          <Text className="text-center">{yearData[selectedSlide].desc}</Text>
          <Text className="opacity-50 !text-sm !font-bold text-center">
            ({GetMonthStr(yearData[selectedSlide].month)})
          </Text>
        </Stack>
      </Flex>
      <Modal.Root
        onClose={close}
        opened={modalOpened}
        size="lg"
        padding="0"
        shadow="xl"
        centered
      >
        <Modal.Overlay blur={3} opacity={0.9} />
        <Modal.Content>
          <Modal.Body>
            <Modal.CloseButton className="!absolute !z-10 right-[1em] top-[1em] !bg-transparent !text-black !shadow-lg !shadow-neutral-500 !rounded-2xl" />
            <Image
              src={`${basePath}/${modalData.imgUrl}`}
              alt={`Image in Milestones : ${modalData.title}`}
              fit="contain"
              w="100%"
              pos="relative"
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default SliderCarousel;
