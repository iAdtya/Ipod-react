import React from "react";
import ArrayList from "./ArrayList.js";
import styles from "./styles/Menu.module.css";

export default function Menu(props) {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.heading}>
          <h1>{Object.keys(ArrayList)[selectedMenu]}</h1>
        </div>

        <div className={styles.options}>

          <div className={`${CSS.item} ${index === selectedOption ? CSS.selectedOption : ''}`}>
            <div className={styles.optionName}></div>
            <div className={styles.optionIcon}></div>
          </div>
          
        </div>
      </div>
    </>
  );
}
