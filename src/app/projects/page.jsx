import Link from "next/link";
import { Flex } from "@mantine/core";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <main>
      <text className="text-lg block">
        {
          "On this page, you can find a list of some of the interesting works I have been a part of. These works are available publicly through my "
        }
        <Link href="https://github.com/sunnysoni97" className="text-blue-400">
          {"GitHub profile"}
        </Link>
        {
          ". If some work catches your eye, feel free to check it out in details."
        }
      </text>
      <br />
      <h2 className="text-2xl font-bold">{"Spotlights"}</h2>
      <Flex
        align="center"
        direction={{ base: "column", sm: "row" }}
        columnGap={{ base: "xl", sm: "sm" }}
        rowGap={{ base: "xl", sm: "md" }}
        justify={{ sm: "center" }}
        wrap="wrap"
        className="flex-auto"
      >
        <div className="h-[200px] w-[200px] border-2 border-black box-border">
          <text> This is some box. </text>
        </div>
        <div className="h-[200px] w-[200px] border-2 border-black box-border">
          <text> This is some box. </text>
        </div>
        <div className="h-[200px] w-[200px] border-2 border-black box-border">
          <text> This is some box. </text>
        </div>
        <div className="h-[200px] w-[200px] border-2 border-black box-border">
          <text> This is some box. </text>
        </div>
      </Flex>
    </main>
  );
}
