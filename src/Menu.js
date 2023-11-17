import React from "react";
import {ArrayList} from "./ArrayList.js";
import styles from "./styles/Menu.module.css";

export default function Menu(props) {
  const { selectedMenu, selectedOption } = props;
  const arrayMenu = Object.values(ArrayList)[selectedMenu];

  return (
    <>
      <div className={styles.body}>
        <div className={styles.heading}>
          <h1>{Object.keys(ArrayList)[selectedMenu]}</h1>
        </div>
        <div className={styles.options}>
          {arrayMenu.map((option, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                index === selectedOption ? styles.selectedOption : ""
              }`}
            >
              <div className={styles.optionName}>
                <h3>{option.name}</h3>
              </div>
              <div className={styles.optionIcon}>
                <img src={option.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
