"use client";

import { usePathname } from "next/navigation";

const NavBar = (props) => {
  const pathName = usePathname();
  return <h4 className="text-3xl">Route of this page is {pathName}</h4>;
};

export default NavBar;
