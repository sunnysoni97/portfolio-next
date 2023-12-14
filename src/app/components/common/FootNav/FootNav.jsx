"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button, Group } from "@mantine/core";
import { nprogress } from "@mantine/nprogress";
import { ArrowBigRight, ArrowBigLeft } from "tabler-icons-react";

import { routeURIList, routeNameList, routeIconList } from "@/app/siteMetadata";

const FootNav = (props) => {
  const router = useRouter();

  const curPath = usePathname();
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
    <Group h="100%" w="100%" justify="space-between" gap="sm" px="lg">
      <Button
        leftSection={ArrowBigLeft({ ...btnIconProps, color: "#0d9488" })}
        rightSection={routeIconList[backIdx]({
          ...btnIconProps,
          color: "#0d9488",
        })}
        onClick={() => {
          handleClick(routeURIList[backIdx]);
        }}
        variant="subtle"
        classNames={{ label: "text-teal-600 text-base" }}
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
        variant="subtle"
        classNames={{ label: "text-teal-900 text-sm" }}
      >
        {routeNameList[fwdIdx]}
      </Button>
    </Group>
  );
};

export default FootNav;
