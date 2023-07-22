import Link from "next/link";
import React from "react";

const navigations = [
  { name: "DASHBOARD", isCommingSonn: false, to: "/dashboard" },
  { name: "ABOUT", isCommingSonn: false, to: "/about" },
  { name: "CONTACT", isCommingSonn: false, to: "/contact" },
  { name: "JION US", isCommingSonn: true, to: "join-us" },
];

const Sidebar = () => {
  return (
    <div className=" h-screen text-white flex flex-col justify-center font-bold text-lg md:hidden">
      {navigations.map((nav, i) => (
        <div className="flex justify-between px-5" key={i}>
          <Link href={"#"}>{nav.name}</Link>
          {nav.isCommingSonn ? (
            <h1 className=" text-slate-50">COMMING SOON</h1>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
