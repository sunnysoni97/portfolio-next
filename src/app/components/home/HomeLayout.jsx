"use client";

import { Text, Image, Paper, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

import { basePath } from "../../../../next.config";

const HomeLayout = (props) => {
  const router = useRouter();
  return (
    <Paper w="90%" maw={1000} shadow="lg" radius="md" mx="auto" p="lg">
      <Stack align="center">
        <Image
          src={`${basePath}/images/home/profile_pic.jpg`}
          w="50%"
          miw={150}
          maw={300}
          alt="Sunny's Profile Picture"
          radius={"md"}
        />
      </Stack>
      <br />
      <Text className="text-center !text-lg !font-bold">
        {"Welcome Visitor!"}
      </Text>
      <br />
      <Text className="text-justify">
        {
          " This portfolio presents you with a tiny walkthrough of my work life. On this website, you can find a showcase of some significant moments throughout my career as well as some information about myself demonstrating my interests and capabilities."
        }
      </Text>
      <br />
      <Button
        onClick={() => {
          router.push("/about-me");
        }}
        variant="transparent"
        size="compact-md"
        px="unset"
      >
        {"Lets dive in..."}
      </Button>
    </Paper>
  );
};

export default HomeLayout;
