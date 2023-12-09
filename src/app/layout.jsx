import { Inter } from "next/font/google";

import NavBar from "./components/common/NavBar";

import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="box-border w-[70vw] min-w-[1024px] min-h-[98vh] mx-auto my-[0.5%] rounded border-x-2 border-y-2 border-x-sky-800 border-y-sky-900 ">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
