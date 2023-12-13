import { Inter } from "next/font/google";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";

import NavBar from "./components/common/NavBar";

import "@/app/global.css";
import "@mantine/core/styles.css";

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
          <div className="box-border w-[70vw] min-w-[1024px] min-h-[98vh] mx-auto my-[0.5%] rounded border-x-2 border-y-2 border-x-sky-800 border-y-sky-900 ">
            <NavBar />
            {children}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
