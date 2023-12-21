"use client";

import { Flex, Stack, Divider } from "@mantine/core";
import CheckMobile from "@/app/components/common/CheckMobile";

const MilestonesLayout = ({ overview = "", slider = "" }) => {
  const isMobile = CheckMobile();

  return (
    <div className="[w-100%]">
      <text className="text-2xl font-bold block">
        {"Timeline of Milestones"}
      </text>
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
          <text className="text-xl font-bold block">{"Overview"}</text>
          {overview}
        </Stack>
        <Stack
          w={isMobile ? "100%" : "70%"}
          className="shadow-lg rounded-lg"
          p="md"
        >
          <text className="text-xl font-bold block">
            {"Interactive Slider"}
          </text>
          {slider}
        </Stack>
      </Flex>
    </div>
  );
};

export default MilestonesLayout;
