import React, { HTMLProps } from "react";
import cl from "classnames";

type ButtonProps = HTMLProps<HTMLButtonElement> & {};
const Button: React.FC<ButtonProps> = ({ children, className }, props) => {
  return (
    <button
      {...props}
      className={cl("btn hover:translate-x-1 transition-all", className)}
    >
      {children}
    </button>
  );
};

export default Button;
