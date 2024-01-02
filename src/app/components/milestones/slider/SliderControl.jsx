"use client";

import { Slider, Text } from "@mantine/core";

import CheckMobile from "@/app/components/common/CheckMobile";

const SliderControl = ({ sliderData, selectedYearSetter }) => {
  if (sliderData === undefined) {
    return;
  } else if (sliderData.length === 0) {
    return;
  }
  const isMobile = CheckMobile();
  const yearLow = parseInt(sliderData[0].year);
  const yearHigh = parseInt(sliderData[sliderData.length - 1].year);

  const marks = [];

  for (let i = yearLow; i <= yearHigh; ++i) {
    marks.splice(marks.length, 0, { value: i, label: i % 1000 });
  }

  return (
    <>
      <Text className="text-center !text-sm !font-bold opacity-50">
        {"(Drag the slider to any year)"}
      </Text>
      <br />
      <Slider
        min={yearLow}
        max={yearHigh}
        onChangeEnd={selectedYearSetter}
        marks={marks}
        labelTransitionProps={{
          transition: "slide-up",
          duration: 125,
          timingFunction: "linear",
        }}
        size="lg"
        classNames={{
          markLabel: `font-bold ${isMobile ? "!text-xs" : "!text-lg"}`,
        }}
      />
    </>
  );
};

export default SliderControl;
