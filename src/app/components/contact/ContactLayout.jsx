"use client";

import { Flex, Paper, Text } from "@mantine/core";

import ContactForm from "@/app/components/contact/ContactForm";

const ContactLayout = () => {
  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      columnGap="xl"
      align={{ base: "center", xl: "flex-start" }}
      justify="space-evenly"
      wrap="nowrap"
    >
      <Paper w={{ base: "90%", md: "60%", xl: "50%" }} mx="auto" shadow="lg">
        <Text className="!text-lg">{"This is the links area."}</Text>
      </Paper>
      <Paper w={{ base: "90%", md: "60%", xl: "50%" }} mx="auto" shadow="lg">
        <ContactForm />
      </Paper>
    </Flex>
  );
};

export default ContactLayout;
