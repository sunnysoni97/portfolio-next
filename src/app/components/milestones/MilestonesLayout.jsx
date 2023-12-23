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
        gap={{ base: "md", md: "lg", lg: "xl" }}
        align={isMobile ? "center" : "flex-start"}
        p={{ base: 0, md: "md", lg: "sm" }}
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
          <Text className="!text-xl !font-bold">{"Year-in-Pictures"}</Text>
          {slider}
        </Stack>
      </Flex>
    </div>
  );
};

export default MilestonesLayout;
