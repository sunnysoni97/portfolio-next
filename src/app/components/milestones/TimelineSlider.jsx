"use client";

import { Stack } from "@mantine/core";
import { useState, useEffect } from "react";

import CheckMobile from "@/app/components/common/CheckMobile";
import LoadSliderData from "@/app/components/milestones/slider/LoadSliderData";
import SliderControl from "@/app/components/milestones/slider/SliderControl";

const TimelineSlider = (props) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const sliderData = LoadSliderData();
  const isMobile = CheckMobile();

  useEffect(() => {
    console.log(`Selected year : ${selectedYear}`);
  }, [selectedYear]);

  useEffect(() => {
    setSelectedYear(parseInt(sliderData[0].year));
  }, [sliderData]);

  sliderData.sort((a, b) => {
    const ord = parseInt(a.year) - parseInt(b.year);
    if (ord == 0) {
      return parseInt(a.month) - parseInt(b.month);
    }
    return ord;
  });

  return (
    <Stack py="lg">
      <div className="w-[75%] mx-auto">
        <SliderControl
          sliderData={sliderData}
          selectedYearSetter={setSelectedYear}
        />
      </div>
    </Stack>
  );
};

export default TimelineSlider;
