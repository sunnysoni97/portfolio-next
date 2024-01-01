"use client";

import { Flex, Stack, Divider, Text } from "@mantine/core";

const MilestonesLayout = ({ overview = "", slider = "" }) => {
  return (
    <div className="[w-100%]">
      <Text className="!text-2xl !font-bold">{"Timeline of Milestones"}</Text>
      <Divider my="md" />
      <Flex
        direction={{ base: "column", xl: "row" }}
        gap={{ base: "md", md: "lg", lg: "xl" }}
        align={{ base: "center", xl: "flex-start" }}
        p={{ base: 0, md: "md", lg: "sm" }}
      >
        <Stack
          w={{ base: "100%", xl: "35%" }}
          className="shadow-lg rounded-lg"
          p="md"
        >
          <Text className="!text-xl !font-bold">{"Overview"}</Text>
          {overview}
        </Stack>
        <Stack
          w={{ base: "100%", xl: "65%" }}
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
