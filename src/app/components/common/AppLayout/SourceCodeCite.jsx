"use client";

import { Text } from "@mantine/core";
import Link from "next/link";

import CheckMobile from "@/app/components/common/CheckMobile";

const SourceCodeCite = (props) => {
  const isMobile = CheckMobile();

  return (
    <Text className={isMobile ? "!text-xs" : "!text-sm"}>
      {
        "Portfolio designed using NextJS with Mantine. Source code available at my git repository "
      }
      <Link
        href="https://github.com/sunnysoni97/portfolio-next/"
        className="text-blue-600 no-underline"
      >
        {"here."}
      </Link>
    </Text>
  );
};

export default SourceCodeCite;
