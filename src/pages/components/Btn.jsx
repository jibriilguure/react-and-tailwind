import React from "react";

const Btn = ({ title, color }) => {
  const buttonStyle = `bg-${
    color || "p"
  } w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white`;
  return <button className={buttonStyle}>{title}</button>;
};

export default Btn;
