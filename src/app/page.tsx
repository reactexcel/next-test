"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Lorems from "@/components/Lorems";
import About from "@/components/About";
import Accordian from "@/components/AccordianSection";

const data = [
  {
    title: "LOREM IPSUM SET",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis ea esse ullam aliquam fuga deserunt! Labore totam maximeaut minima omnis quisquam doloremque exercitationem vitae, assumendarepellendus cum ut perferendis neque nostrum explicabo voluptatemcommodi repellat saepe nulla quibusdam accusantium excepturi modi.",
    isChecked: false,
    id: 1,
  },
  {
    title: "LOREM IPSUM SET",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis ea esse ullam aliquam fuga deserunt! Labore totam maximeaut minima omnis quisquam doloremque exercitationem vitae, assumendarepellendus cum ut perferendis neque nostrum explicabo voluptatemcommodi repellat saepe nulla quibusdam accusantium excepturi modi.",
    isChecked: false,
    id: 2,
  },
  {
    title: "LOREM IPSUM SET",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis ea esse ullam aliquam fuga deserunt! Labore totam maximeaut minima omnis quisquam doloremque exercitationem vitae, assumendarepellendus cum ut perferendis neque nostrum explicabo voluptatemcommodi repellat saepe nulla quibusdam accusantium excepturi modi.",
    isChecked: false,
    id: 3,
  },
  {
    title: "LOREM IPSUM SET",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis ea esse ullam aliquam fuga deserunt! Labore totam maximeaut minima omnis quisquam doloremque exercitationem vitae, assumendarepellendus cum ut perferendis neque nostrum explicabo voluptatemcommodi repellat saepe nulla quibusdam accusantium excepturi modi.",
    isChecked: false,
    id: 4,
  },
];

export default function Home() {
  const [showMenus, setShowMenus] = useState<boolean>(false);
  const [lorems, setLorems] = useState(data);

  const handleAccordian = (id: number) => {
    setLorems(
      lorems.map((item) => {
        console.log(item, id, "lorems");

        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked };
        } else {
          return { ...item, isChecked: false };
        }
      })
    );
  };
  return (
    <div className="bg-black h-[100%] pb-20">
      <Navbar showMenus={showMenus} setShowMenus={setShowMenus} />
      <div>
        {showMenus ? <Sidebar /> : null}
        <Lorems />
        <About />

        <Lorems />
        <div className=" mx-16 text-white flex flex-col ">
          <h1 className=" font-bold text-6xl self-center">LOREM IPSUM DOLOR</h1>
          <div>
            {lorems.map((item) => (
              <Accordian
                item={item}
                key={item.id}
                handleAccordian={handleAccordian}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
