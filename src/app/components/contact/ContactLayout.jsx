"use client";

import { Flex, Paper, Text, Group, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

import { BrandLinkedin, BrandGmail } from "tabler-icons-react";

import ContactForm from "@/app/components/contact/ContactForm";

const ContactLayout = () => {
  const router = useRouter();
  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      columnGap="xl"
      align={{ base: "center", xl: "stretch" }}
      justify="space-evenly"
      wrap="nowrap"
    >
      <Paper
        w={{ base: "90%", md: "60%", xl: "50%" }}
        mx="auto"
        shadow="lg"
        p="lg"
      >
        <Stack justify="center" h="100%" gap="xl">
          <Text
            className="text-justify"
            style={{ whiteSpace: "pre-wrap" }}
          >{`If you would like to get in touch with me, feel free to reach out to me through any of my socials provided below. You can also use the contact form. I am always in for a quick exchange on everything interesting in the exciting world of AI and computers. In the end, we might end up getting to know some undiscovered facts from one another, which is always a pleasurable moment.\n\nThanks for taking your time to go through my portfolio. I bid you a good day!`}</Text>

          <Group my="lg" justify="center" gap="xl">
            <Button
              variant="transparent"
              size="compact-xl"
              onClick={() => {
                router.push("https://www.linkedin.com/in/sunnysoni97/");
              }}
            >
              <BrandLinkedin size="48" strokeWidth={1.5} color="blue" />
            </Button>
            <Button
              variant="transparent"
              size="compact-xl"
              onClick={() => {
                router.push("mailto:sunnysoni97@gmail.com");
              }}
            >
              <BrandGmail size="48" strokeWidth={1.5} color="red" />
            </Button>
          </Group>
        </Stack>
      </Paper>
      <Paper w={{ base: "90%", md: "60%", xl: "50%" }} mx="auto" shadow="lg">
        <ContactForm />
      </Paper>
    </Flex>
  );
};

export default ContactLayout;
