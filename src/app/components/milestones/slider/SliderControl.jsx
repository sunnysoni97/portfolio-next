"use client";

import { Slider, Text } from "@mantine/core";

const SliderControl = ({ sliderData, selectedYearSetter }) => {
  const yearLow = parseInt(sliderData[0].year);
  const yearHigh = parseInt(sliderData[sliderData.length - 1].year);

  const marks = [];

  for (let i = yearLow; i <= yearHigh; ++i) {
    marks.splice(marks.length, 0, { value: i, label: i % 1000 });
  }

  return (
    <>
      <Text className="text-center !text-sm">
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
        classNames={{ markLabel: "font-bold !text-lg" }}
      />
    </>
  );
};

export default SliderControl;