import React from "react";

const Button = ({ title = "Button" }) => {
  return (
    <button className="text-sm bg-gradient-to-r from-pink-500 to-blue-500 px-4 py-2 rounded-lg font-semibold">
      {title}
    </button>
  );
};

export default Button;
