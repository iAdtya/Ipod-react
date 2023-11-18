import React from "react";
import IPodButton from "./IPodButton";
import IPodDisplay from "./IPodDisplay";
import styles from "./styles/IPod.module.css"

export default function Container(props) {
  return (
    <>
      <div className={styles.container}>
        <IPodDisplay {...props} />
        <IPodButton {...props} />
      </div>
    </>
  );
}
