"use client";

import { Text } from "@mantine/core";
import Link from "next/link";

const SourceCodeCite = (props) => {
  return (
    <Text className="!text-sm">
      {
        "Portfolio designed using NextJS with Mantine. Source code available at the repository "
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
