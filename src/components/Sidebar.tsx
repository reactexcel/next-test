import Link from "next/link";
import React from "react";

const navigations = [
  { name: "DASHBOARD", isCommingSonn: false },
  { name: "ABOUT", isCommingSonn: false },
  { name: "CONTACT", isCommingSonn: false },
  { name: "JION US", isCommingSonn: true },
];

const Sidebar = () => {
  return (
    <div className=" h-full text-white flex flex-col justify-center font-bold text-lg md:hidden">
      {navigations.map((nav, i) => (
        <div className="flex justify-between px-5" key={i}>
          <Link href={"#"}>{nav.name}</Link>
          {nav.isCommingSonn ? <h1 className="">COMMING SOON</h1> : null}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
