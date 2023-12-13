"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button, Stack } from "@mantine/core";
import {
  Home,
  School,
  Trophy,
  SourceCode,
  MessageChatbot,
} from "tabler-icons-react";

const ButtonDisplay = ({ btnUrl, btnName, btnIcon, btnIsActive }) => {
  const router = useRouter();

  return (
    <Button
      rightSection={btnIcon}
      variant={btnIsActive ? "light" : "subtle"}
      onClick={() => {
        router.push(btnUrl);
      }}
      justify="space-between"
      classNames={{
        label: btnIsActive ? "text-sky-900 text-lg" : "text-sky-800 text-base",
      }}
      radius="lg"
    >
      {btnName}
    </Button>
  );
};

const NavBar = (props) => {
  const btnUrlList = ["/", "/about-me", "/milestones", "/projects", "/contact"];
  const btnIconList = [Home, School, Trophy, SourceCode, MessageChatbot];
  const btnNameList = ["Home", "About Me", "Milestones", "Projects", "Contact"];
  const pathName = usePathname();
  const idx = btnUrlList.findIndex((ele) => {
    return ele == pathName;
  });

  return (
    <Stack>
      {btnUrlList.map((value, index) => {
        let isActive = false;
        if (index == idx) {
          isActive = true;
        }
        return (
          <ButtonDisplay
            key={value}
            btnUrl={value}
            btnName={btnNameList[index]}
            btnIcon={btnIconList[index](
              (props = {
                size: isActive ? 32 : 28,
                strokeWidth: isActive ? 1.5 : 1.25,
                color: isActive ? "#0c4a6e" : "#075985",
              })
            )}
            btnIsActive={isActive}
          />
        );
      })}
    </Stack>
  );
};

export default NavBar;
