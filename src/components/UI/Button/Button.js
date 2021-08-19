import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, btnType, size, customStyles, ...rest }) => {
  let className = classNames(
    styles.btn,
    btnType && styles[`${btnType}`],
    size && styles[`${size}`]
  );
  return (
    <button onClick={rest.onClick} className={[className, customStyles].join(' ')}>
      {children}
    </button>
  );
};
export default Button;
