import Image from "next/image";
import React from "react";
import CircleImgae from "@/assests/images/CircleImg.png";

const About = () => {
  return (
    <div className=" hidden  h-24 text-white sm:flex mx-16 justify-between h-96 mt-10">
      <div className={`w-96 relative`}>
        <h1 className="font-bold text-6xl max-w-0">ABOUT US</h1>
        <h1>Lorem</h1>
        <h1>Lorem</h1>
        <Image
          src={CircleImgae}
          alt="image"
          className=" absolute top-11 left-20 w-80"
        />
      </div>
      <div className=" w-8/12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima
          deserunt debitis laborum incidunt dignissimos nihil error? Voluptas,
          quam recusandae enim veritatis possimus rem quo voluptates,
          voluptatem, laboriosam repudiandae excepturi?
        </p>
      </div>
    </div>
  );
};

export default About;
