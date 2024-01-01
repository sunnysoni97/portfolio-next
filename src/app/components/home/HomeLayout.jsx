"use client";

import { Text, Image, Paper, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { basePath } from "../../../../next.config";

const HomeLayout = (props) => {
  const router = useRouter();
  const linkData = [
    ["/about-me", "About Me", "Brief overview about myself"],
    ["/milestones", "Milestones", "Timeline of notable events in my life"],
    ["/projects", "Projects", "Portfolio of my open source projects"],
    ["/contact", "Contact", "Lets get in touch"],
  ];

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
          "This portfolio presents you with a tiny walkthrough of my life. On this website, you can find a showcase of some significant moments throughout my career as well as some information about myself demonstrating my interests and capabilities."
        }
      </Text>
      <br />
      <Text className="!font-bold">Section Overview</Text>
      {linkData.map((value, index) => {
        return (
          <Text key={index} style={{ whiteSpace: "pre-wrap" }} my="sm">
            <Link href={value[0]} className="no-underline !text-sky-700">
              <b>{value[1]}...</b>
            </Link>
            {` ${value[2]}`}
          </Text>
        );
      })}
      <center>
        <Button
          onClick={() => {
            router.push("/about-me");
          }}
          variant="outline"
          size="compact-md"
          my="xs"
        >
          {"Lets dive in..."}
        </Button>
      </center>
    </Paper>
  );
};

export default HomeLayout;
