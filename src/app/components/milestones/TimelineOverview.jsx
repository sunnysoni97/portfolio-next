"use client";

import { Timeline, Divider, Text } from "@mantine/core";
import { MoodSmile } from "tabler-icons-react";

import CheckMobile from "@/app/components/common/CheckMobile";
import LoadOverviewData from "@/app/components/milestones/LoadOverviewData";

const getNumberIcon = (year) => {
  const firstDig = year.slice(-2, -1);
  const secondDig = year.slice(-1);

  return (
    <Text className="!font-bold !text-sm">{`${firstDig} ${secondDig}`}</Text>
  );
};

const TimelineOverview = (props) => {
  const isMobile = CheckMobile();
  const overviewData = LoadOverviewData();
  overviewData.sort((a, b) => {
    return parseInt(a.year) - parseInt(b.year);
  });

  return (
    <>
      <Timeline
        w={isMobile ? "80%" : "95%"}
        mx="auto"
        active={overviewData.length - 1}
        bulletSize={40}
        lineWidth={3}
        align="left"
        radius="xl"
        classNames={{ itemTitle: "!font-bold text-lg" }}
        p="md"
      >
        {overviewData.map((value, index) => {
          return (
            <Timeline.Item
              key={index}
              bullet={getNumberIcon(value.year)}
              title={value.title}
              lineVariant={
                index == overviewData.length - 1 ? "dashed" : "solid"
              }
            >
              <Text className="!block !text-sm !font-bold !opacity-70">
                {value.year}
              </Text>
              <Divider mt={2} mb={4} />
              <Text className="!block">{value.desc}</Text>
            </Timeline.Item>
          );
        })}
        <Timeline.Item bullet={<MoodSmile size={40} />}>
          <Text className="!font-bold !italic">
            {"...Future is Loading..."}
          </Text>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default TimelineOverview;
