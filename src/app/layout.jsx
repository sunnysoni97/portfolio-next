import { Inter } from "next/font/google";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";

import { AppLayout } from "@/app/components/common/AppLayout/AppLayout";

import "@/app/global.css";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({});

export const metadata = {
  title: {
    template: "%s | Vitaelia",
    default: "Vitaelia",
  },
  description: "Web-Portfolio - Designed by Sunny Soni with Next.js",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <NavigationProgress
            color="#bae6fd"
            size={4}
            stepInterval={500}
            initialProgress={20}
          />
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
