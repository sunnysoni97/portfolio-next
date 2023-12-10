"use client";

import { usePathname, useRouter } from "next/navigation";

const Button = (props) => {
  const btnName = props.btnName;
  const isActive = props.isActive;
  const btnDisplay = props.btnDisplay;

  const router = useRouter();

  let cssProps = "border-2";

  if (isActive) {
    cssProps = cssProps.concat(" border-red-900");
  } else {
    cssProps = cssProps.concat(" border-yellow-200");
  }

  return (
    <div
      onClick={() => {
        router.push(btnName);
      }}
      className={cssProps}
    >
      <p>{btnDisplay}</p>
    </div>
  );
};

const NavBar = (props) => {
  const btnList = ["/", "/about-me", "/milestones", "/projects", "/contact"];
  const btnDisplayList = [
    "Home",
    "About Me",
    "Milestones",
    "Projects",
    "Contact",
  ];
  const pathName = usePathname();
  const idx = btnList.findIndex((ele) => {
    return ele == pathName;
  });

  return (
    <div className="flex flex-row">
      {btnList.map((value, index) => {
        let isActive = false;
        if (index == idx) {
          isActive = true;
        }
        return (
          <Button
            btnName={value}
            isActive={isActive}
            key={value}
            btnDisplay={btnDisplayList[index]}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
