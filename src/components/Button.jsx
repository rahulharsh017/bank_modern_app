import React from "react";

const Button = ({ styles, content }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}
    >
      {content}
    </button>
  );
};

export default Button;
