import React, { useState } from "react";
import styles from "./Navbar.module.css";

import Icon from "../UI/Icon/Icon";
const Navbar = () => {
  let [toggle, setToggle] = useState(false);
console.log(toggle)
  let toggleHandler = () => {
    setToggle((preState) => !preState);
  };
  return (
    <nav className={styles.navbar}>
      <Icon onClick={toggleHandler} icon="bars" size="3x" />
      <p className={styles.logo}>
        exp<span className={styles.bar}>|</span>con
      </p>
      {toggle ? (
        <div onClick={toggleHandler} className={styles.dropdownContent}>
          <a href="#">what is it</a>
          <a href="#">perks</a>
          <a href="#">pricing</a>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
