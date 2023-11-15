import React from "react";
import styles from "./styles/Ipodbutton.module.css";

export default function IPodButton(props) {
  const { wheelRef, btnFunction, selectedOption } = props;

  return (<>
    <div className={styles.buttonSide}>
        <div className={styles.buttonOuter} ref={wheelRef}>
            <button className={styles.button + ' ' + styles.menuButton} onTouchEnd={() => btnFunction.menuOrBack()} onClick={() => btnFunction.menuOrBack()}>MENU</button>
            <button className={styles.button + ' ' + styles.back} onTouchEnd={() => btnFunction.backwardBtn()} onClick={() => btnFunction.backwardBtn()}><i className="bi bi-skip-backward-fill"></i></button>
            <button className={styles.button + ' ' + styles.forward} onTouchEnd={() => btnFunction.forwardBtn()} onClick={() => btnFunction.forwardBtn()}><i className="bi bi-skip-forward-fill"></i></button>
            <button className={styles.button + ' ' + styles.playPause} onTouchEnd={() => btnFunction.playBtn()} onClick={() => btnFunction.playBtn()}><i className="bi bi-play-fill"></i><i className="bi bi-pause-fill"></i></button>
        </div>
        <div className={styles.buttonInner} onTouchEnd={() => btnFunction.okButtonHandle(selectedOption)} onClick={() => btnFunction.okButtonHandle(selectedOption)}>
            <h1>OK</h1>
        </div>
    </div>
</>)
}
