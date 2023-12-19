"use client";

import { Card, Image, Button, Spoiler } from "@mantine/core";
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
        <text
          className={`${isMobile ? "text-lg" : "text-xl"} font-bold block py-2`}
        >
          {title}
        </text>
      </Card.Section>

      <Card.Section withBorder>
        <Image
          src={`${basePath}/${imgUrl}`}
          w="100%"
          alt={`Banner Image of ${title}`}
        />
      </Card.Section>

      <Card.Section inheritPadding withBorder>
        <div className="py-2">
          <Spoiler
            hideLabel="Show Less"
            showLabel="Read More"
            maxHeight={150}
            classNames={{
              content: `${isMobile ? "text-base" : "text-lg"} text-justify`,
            }}
          >
            {desc}
          </Spoiler>
        </div>
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
                  color="rgb(99 102 241)"
                />
              }
              variant="subtle"
              size={isMobile ? "compact-sm" : "compact-md"}
              classNames={{
                label: `${isMobile ? "text-sm" : "text-sm"} text-indigo-600`,
              }}
            >
              {"View Repository"}
            </Button>
          </div>
        </center>
      </Card.Section>
    </Card>
  );
};

export default ProjectCard;
