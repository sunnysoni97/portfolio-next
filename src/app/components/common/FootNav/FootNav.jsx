"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Group } from "@mantine/core";
import { nprogress } from "@mantine/nprogress";
import { ArrowBigRight, ArrowBigLeft } from "tabler-icons-react";

import { routeURIList, routeNameList, routeIconList } from "@/app/siteMetadata";
import CheckMobile from "@/app/components/common/CheckMobile";

const FootNav = (props) => {
  const router = useRouter();
  const curPath = usePathname();
  const isMobile = CheckMobile();
  const curIdx = routeURIList.findIndex((ele) => {
    return ele == curPath;
  });
  const backIdx = curIdx - 1 >= 0 ? curIdx - 1 : 0;
  const fwdIdx =
    curIdx + 1 < routeNameList.length ? curIdx + 1 : routeNameList.length - 1;

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
      w="100%"
      justify="space-between"
      gap="xs"
      px={isMobile ? "sm" : "md"}
      align="center"
    >
      <Group w={isMobile ? "40%" : "35%"} justify="flex-start">
        <text className={isMobile ? "text-xs" : "text-sm"}>
          {"Portfolio source code available "}
          <Link
            href="https://github.com/sunnysoni97/portfolio-next/"
            className="text-blue-600 no-underline"
          >
            {"here."}
          </Link>
        </text>
      </Group>
      <Group
        w={isMobile ? "55%" : "60%"}
        justify="flex-end"
        gap={isMobile ? "sm" : "md"}
      >
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
      </Group>
    </Group>
  );
};

export default FootNav;
