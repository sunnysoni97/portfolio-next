"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group } from "@mantine/core";
import nextConfig from "../../../../../next.config";

import NavBar from "@/app/components/common/NavBar/NavBar";

export function AppLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();
  const basePath = nextConfig.basePath;

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 250, lg: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          h="100%"
          px="md"
          styles={{
            root: {
              backgroundImage: `url(${basePath}/images/layout/header.jpg)`,
              backgroundAttachment: "fixed",
            },
          }}
          className="bg-contain bg-repeat"
        >
          <Burger opened={opened} onClick={toggle} color="white" />
          <h1 className="text-4xl text-center text-white font-bold font-sans antialiased flex-auto ">
            {" "}
            Vitaelia{" "}
          </h1>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
