"use client";

import { Stack } from "@mantine/core";
import { useState, useEffect } from "react";

import LoadSliderData from "@/app/components/milestones/LoadSliderData";
import SliderControl from "@/app/components/milestones/slider/SliderControl";
import SliderCarousel from "@/app/components/milestones/slider/SliderCarousel";

const getYearData = ({ completeData, year }) => {
  const selectedData = [];
  for (const entry of completeData) {
    if (parseInt(entry.year) == year) {
      selectedData.push(entry);
    }
  }
  return selectedData;
};

const TimelineSlider = (props) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedYearData, setSelectedYearData] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const sliderData = LoadSliderData();

  useEffect(() => {
    setSelectedSlide(0);
    setSelectedYearData(
      getYearData({ completeData: sliderData, year: selectedYear })
    );
  }, [selectedYear, sliderData]);

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
      <br />
      <div className="w-[75%] mx-auto">
        <SliderCarousel
          yearData={selectedYearData}
          selectedSlide={selectedSlide}
          setSelectedSlide={setSelectedSlide}
        />
      </div>
    </Stack>
  );
};

export default TimelineSlider;
