"use client";

import { Card, Image, Button, Spoiler, Text, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { CodeCircle } from "tabler-icons-react";
import CheckMobile from "@/app/components/common/CheckMobile";

import { basePath } from "../../../../next.config";

const ProjectCard = ({
  title = "Project Title",
  imgUrl = "/images/test_image.png",
  desc = "Project Description",
  repoUrl = "/repo_url",
}) => {
  const router = useRouter();
  const isMobile = CheckMobile();

  return (
    <Card
      padding={isMobile ? "md" : "lg"}
      shadow={isMobile ? "md" : "lg"}
      classNames={{ root: `${isMobile ? "max-w-md" : "max-w-sm"}` }}
      withBorder
    >
      <Card.Section inheritPadding withBorder>
        <Text className={`${isMobile ? "" : "!text-lg"} !font-bold !py-2`}>
          {title}
        </Text>
      </Card.Section>

      <Card.Section withBorder>
        <Image
          src={`${basePath}/${imgUrl}`}
          w="100%"
          alt={`Banner Image of ${title}`}
        />
      </Card.Section>

      <Card.Section inheritPadding withBorder h="100%">
        <Stack justify="space-between" h="100%" py={isMobile ? "sm" : "md"}>
          <Spoiler
            hideLabel="Show Less"
            showLabel="Read More"
            maxHeight={150}
            classNames={{
              content: `text-justify`,
            }}
          >
            {desc}
          </Spoiler>
          <center>
            <div className="py-2">
              <Button
                onClick={() => {
                  router.push(repoUrl);
                }}
                rightSection={
                  <CodeCircle
                    size={isMobile ? 18 : 24}
                    strokeWidth={isMobile ? 1.25 : 1.5}
                    color="rgb(37 99 235)"
                  />
                }
                variant="subtle"
                size={isMobile ? "compact-sm" : "compact-md"}
                classNames={{
                  label: `text-blue-600`,
                }}
              >
                {"View Repository"}
              </Button>
            </div>
          </center>
        </Stack>
      </Card.Section>
    </Card>
  );
};

export default ProjectCard;
