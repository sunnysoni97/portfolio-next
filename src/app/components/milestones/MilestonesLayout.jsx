"use client";

import { Flex, Stack, Divider, Text } from "@mantine/core";
import CheckMobile from "@/app/components/common/CheckMobile";

const MilestonesLayout = ({ overview = "", slider = "" }) => {
  const isMobile = CheckMobile();

  return (
    <div className="[w-100%]">
      <Text className="!text-2xl !font-bold">{"Timeline of Milestones"}</Text>
      <Divider my="md" />
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={{ sm: "md", md: "lg", lg: "xl" }}
        align={isMobile ? "center" : "flex-start"}
        p={{ sm: "lg", md: "md", lg: "sm" }}
      >
        <Stack
          w={isMobile ? "100%" : "30%"}
          className="shadow-lg rounded-lg"
          p="md"
        >
          <Text className="!text-xl !font-bold">{"Overview"}</Text>
          {overview}
        </Stack>
        <Stack
          w={isMobile ? "100%" : "70%"}
          className="shadow-lg rounded-lg"
          p="md"
        >
          <Text className="!text-xl !font-bold">{"Interactive Slider"}</Text>
          {slider}
        </Stack>
      </Flex>
    </div>
  );
};

export default MilestonesLayout;
