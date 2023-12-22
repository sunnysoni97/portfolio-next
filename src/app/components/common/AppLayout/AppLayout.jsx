"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect } from "react";
import { nprogress } from "@mantine/nprogress";

import { routeBase } from "@/app/siteMetadata";
import NavBar from "@/app/components/common/NavBar/NavBar";
import FootNav from "@/app/components/common/FootNav/FootNav";

export function AppLayout({ children }) {
  const [scrollPosition, setScrollPosition] = useWindowScroll();
  const [openedMobile, toggleMobile] = useDisclosure(false);
  const [openedDesktop, toggleDesktop] = useDisclosure(true);

  useEffect(() => {
    nprogress.complete();
  }, [children]);

  const pinned = scrollPosition.y < 120;

  return (
    <AppShell
      header={{
        height: { base: 60, md: 70, lg: 80 },
        offset: true,
        collapsed: !pinned,
      }}
      navbar={{
        width: { base: 200, md: 250, lg: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !openedMobile, desktop: !openedDesktop },
      }}
      footer={{
        height: { base: 30, md: 35, lg: 40 },
        offset: true,
      }}
      padding={{ base: "md", md: "lg", lg: "xl" }}
    >
      <AppShell.Header>
        <Group
          h="100%"
          px="md"
          styles={{
            root: {
              backgroundImage: `url(${routeBase}/images/layout/header.jpg)`,
              backgroundAttachment: "scroll",
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              backgroundRepeat: "repeat-x",
            },
          }}
          className="bg-contain bg-repeat"
        >
          <Burger
            opened={openedMobile}
            onClick={toggleMobile.toggle}
            color="white"
            hiddenFrom="md"
          />
          <Burger
            opened={openedDesktop}
            onClick={toggleDesktop.toggle}
            color="white"
            visibleFrom="md"
          />
          <Text className="!text-4xl !text-center !text-white !font-bold !font-sans !antialiased !flex-auto">
            {"Vitaelia"}
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <FootNav />
      </AppShell.Footer>
    </AppShell>
  );
}
