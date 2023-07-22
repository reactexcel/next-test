import AddIcon from "@/assests/icons/AddIcon";
import CircleIcon from "@/assests/icons/CircleIcon";
import MenuIcon from "@/assests/icons/MenuIcon";
import Image from "next/image";
import React from "react";
import imgOne from "@/assests/images/imgOne.png";
import imgTwo from "@/assests/images/imgTwo.png";

const Lorems = () => {
  return (
    <div className=" mx-5 sm:mx-16 mt-5 text-white ">
      <h1 className=" font-bold text-6xl ">LOREM IPSUM</h1>

      <div className="flex flex-col gap-2 sm:flex-row ">
        <div className="sm:w-80 ">
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
          <h1 className="text-xl font-bold">DOLOR SIT</h1>
          <p className=" text-slate-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxime
            aut minima omnis quisquam doloremque exercitationem vitae, assumenda
            repellendus cum ut perferendis neque nostrum explicabo voluptatem
            commodi repellat saepe nulla quibusdam accusantium excepturi modi.
            Repudiandae doloribus quod totam. Omnis, animi repellendus?
          </p>
          <AddIcon />
          {false ? (
            <Image src={imgOne} alt="image" className="sm:w-80" />
          ) : null}
        </div>
        <div className=" sm:w-80 ">
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
          <h1 className="text-xl font-bold">LOREM IPSUM DOLOR SIT</h1>
          <p className=" text-slate-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxime
            aut minima omnis quisquam doloremque exercitationem vitae, assumenda
            repellendus cum ut perferendis neque nostrum explicabo voluptatem
            commodi repellat saepe nulla quibusdam accusantium excepturi modi.
            Repudiandae doloribus quod totam. Omnis, animi repellendus?
          </p>
          <MenuIcon />
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
        </div>
        <div className=" sm:w-80 ">
          {true ? <Image src={imgOne} alt="image" className="sm:w-80" /> : null}
          <h1 className="text-xl font-bold">DOLOR SIT</h1>
          <p className=" text-slate-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxime
            aut minima omnis quisquam doloremque exercitationem vitae, assumenda
            repellendus cum ut perferendis neque nostrum explicabo voluptatem
            commodi repellat saepe nulla quibusdam accusantium excepturi modi.
            Repudiandae doloribus quod totam. Omnis, animi repellendus?
          </p>
          <CircleIcon />
          {false ? (
            <Image src={imgOne} alt="image" className="sm:w-80" />
          ) : null}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <div className=" sm:w-80 ">
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
          <h1 className="text-xl font-bold">DOLOR SIT</h1>
          <p className=" text-slate-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxime
            aut minima omnis quisquam doloremque exercitationem vitae, assumenda
            repellendus cum ut perferendis neque nostrum explicabo voluptatem
            commodi repellat saepe nulla quibusdam accusantium excepturi modi.
            Repudiandae doloribus quod totam. Omnis, animi repellendus?
          </p>
          <AddIcon />
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
        </div>
        <div className=" sm:w-80 ">
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
          <h1 className="text-xl font-bold">LOREM IPSUM DOLOR SIT</h1>
          <p className=" text-slate-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxime
            aut minima omnis quisquam doloremque exercitationem vitae, assumenda
            repellendus cum ut perferendis neque nostrum explicabo voluptatem
            commodi repellat saepe nulla quibusdam accusantium excepturi modi.
            Repudiandae doloribus quod totam. Omnis, animi repellendus?
          </p>
          <MenuIcon />
          {true ? <Image src={imgTwo} alt="image" className="sm:w-80" /> : null}
        </div>
        <div className=" sm:w-80 ">
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
          <h1 className="text-xl font-bold">DOLOR SIT</h1>
          <p className=" text-slate-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxime
            aut minima omnis quisquam doloremque exercitationem vitae, assumenda
            repellendus cum ut perferendis neque nostrum explicabo voluptatem
            commodi repellat saepe nulla quibusdam accusantium excepturi modi.
            Repudiandae doloribus quod totam. Omnis, animi repellendus?
          </p>
          <CircleIcon />
          {false ? <Image src={imgOne} alt="image" className="w-80" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Lorems;
