import React from "react";

const ButtonPrimary = ({ onClick, children, addClass }) => {
  return (
    <button onClick={onClick} 
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-300 hover:shadow-blue-100 transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
