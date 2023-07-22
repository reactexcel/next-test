import React from "react";

type Props = {
  item: {
    title: string;
    desc: string;
    isChecked: boolean;
    id: number;
  };
  handleAccordian: (id: number) => void;
};

const Accordian = ({ item, handleAccordian }: Props) => {
  return (
    <div className=" flex justify-center">
      <div className="w-[80%]">
        <div className="flex justify-between font-bold">
          <h1>{item?.title}</h1>
          <button onClick={() => handleAccordian(item.id)}>
            {item?.isChecked ? "-" : "+"}
          </button>
        </div>
        {item?.isChecked
          ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis ea esse ullam aliquam fuga deserunt! Labore totam maxim aut minima omnis quisquam doloremque exercitationem vitae, assumenda repellendus cum ut perferendis neque nostrum explicabo voluptatem"
          : ""}
      </div>
    </div>
  );
};

export default Accordian;
