import React, { Component } from "react";
import styles from "./styles/IPodDisplay.module.css";
import { ArrayList } from "./ArrayList";
import SinglePage from "./Singlepage";
import Song from "./Song";
import Menu from "./Menu";

export default class IPodDisplay extends Component {
  constructor(){
    super()
    this.state={
      time : "00:00:00"
    }
  }
  componentDidMount() {
    setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000)
}

  render() {
    const { currentSong, singlePage, selectedMenu } = this.props;
    const menuName = Object.keys(ArrayList)[selectedMenu];
    const isSongMenu = (menuName === "Songs" && singlePage);
    return (
      <>
        <div className={styles.displaySide}>
          <div className={styles.navBar}>
            <div className={styles.left}>
              <h3>{this.state.time}</h3>
            </div>

            <div className={styles.right}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747568.png"
                alt=""
              />
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9990/9990603.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {!currentSong.paused || isSongMenu ? <Song {...this.props} /> : !singlePage ? <Menu {...this.props} /> : <SinglePage {...this.props} />}


        </div>
      </>
    );
  }
}
