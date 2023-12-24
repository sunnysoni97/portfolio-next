"use client";

import { TextInput, Textarea, Button, Stack, Text } from "@mantine/core";
import { useInputState } from "@mantine/hooks";

const ContactForm = () => {
  const [subject, setSubject] = useInputState("Subject");
  const [content, setContent] = useInputState("Content");

  const handleSend = () => {
    if (subject == "Subject" && content == "Content") {
      return;
    }
    const mailToStr = `mailto:sunnysoni97@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(content)}`;
    window.open(mailToStr, "_blank");
  };

  return (
    <Stack align="center" p="lg">
      <Text className="w-[100%] !font-bold">Write me an Email!</Text>
      <TextInput
        label="Subject"
        placeholder={subject}
        className="self-stretch"
        onChange={setSubject}
      />
      <Textarea
        label="Content"
        placeholder={content}
        className="self-stretch"
        onChange={setContent}
        minRows={16}
        autosize="true"
      />
      <Button
        onClick={(e) => {
          handleSend();
          e.preventDefault();
        }}
      >
        {"Send Email"}
      </Button>
    </Stack>
  );
};

export default ContactForm;
