"use client";

import { Slider } from "@mantine/core";

const SliderControl = ({ sliderData, selectedYearSetter }) => {
  const yearLow = parseInt(sliderData[0].year);
  const yearHigh = parseInt(sliderData[sliderData.length - 1].year);

  const marks = [];

  for (let i = yearLow; i <= yearHigh; ++i) {
    marks.splice(marks.length, 0, { value: i, label: i % 1000 });
  }

  return (
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
    />
  );
};

export default SliderControl;
