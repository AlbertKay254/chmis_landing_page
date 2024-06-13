import React from "react";

const ButtonOutline = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-300 hover:text-white-500 transition-all hover:shadow-blue ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
