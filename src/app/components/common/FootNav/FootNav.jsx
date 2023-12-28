"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button, Group } from "@mantine/core";
import { nprogress } from "@mantine/nprogress";
import { ArrowBigRight, ArrowBigLeft } from "tabler-icons-react";

import { routeURIList, routeNameList, routeIconList } from "@/app/siteMetadata";
import CheckMobile from "@/app/components/common/CheckMobile";
import SourceCodeCite from "@/app/components/common/AppLayout/SourceCodeCite";

const FootNav = (props) => {
  const router = useRouter();
  const curPath = usePathname();
  const isMobile = CheckMobile();
  const curIdx = routeURIList.findIndex((ele) => {
    return ele == curPath;
  });
  const backIdx = curIdx - 1 >= 0 ? curIdx - 1 : -100;
  const fwdIdx = curIdx + 1 < routeNameList.length ? curIdx + 1 : +100;

  const handleClick = (url) => {
    if (curPath != url) {
      nprogress.reset();
      nprogress.start();
    }
    router.push(url);
  };

  const btnIconProps = {
    size: 20,
    strokeWidth: 1.25,
  };

  return (
    <Group
      h="100%"
      justify="space-between"
      gap="xs"
      px={{ base: "sm", md: "md" }}
      align="center"
      wrap="nowrap"
    >
      {isMobile ? null : (
        <Group w="40%" justify="flex-start">
          <SourceCodeCite />
        </Group>
      )}

      <Group
        w={isMobile ? "100%" : "60%"}
        justify={isMobile ? "space-between" : "flex-end"}
        gap={isMobile ? "sm" : "md"}
      >
        {backIdx != -100 ? (
          <Button
            leftSection={ArrowBigLeft({ ...btnIconProps, color: "#0d9488" })}
            rightSection={routeIconList[backIdx]({
              ...btnIconProps,
              color: "#0d9488",
            })}
            onClick={() => {
              handleClick(routeURIList[backIdx]);
            }}
            variant="light"
            classNames={{ label: "text-teal-600 text-sm" }}
            size={isMobile ? "compact-xs" : "compact-md"}
          >
            {routeNameList[backIdx]}
          </Button>
        ) : (
          <span></span>
        )}

        {fwdIdx != 100 ? (
          <Button
            leftSection={routeIconList[fwdIdx]({
              ...btnIconProps,
              color: "#134e4a",
            })}
            rightSection={ArrowBigRight({ ...btnIconProps, color: "#134e4a" })}
            onClick={() => {
              handleClick(routeURIList[fwdIdx]);
            }}
            variant="light"
            classNames={{ label: "text-teal-900 text-sm" }}
            size={isMobile ? "compact-xs" : "compact-md"}
          >
            {routeNameList[fwdIdx]}
          </Button>
        ) : null}
      </Group>
    </Group>
  );
};

export default FootNav;
