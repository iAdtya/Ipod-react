import { Component } from "react";
import  {ArrayList}  from "./ArrayList";
import styles from "./styles/Song.module.css";

export default class Song extends Component {
  constructor() {
    super();

    this.state = {
      seekBarValue: 0,
      currentTimeToBeDisplay: "0:00",
    };
    this.musicDuration = "-:--";
    this.intervalId = null; // Variable to store the interval ID
  }

  componentDidMount() {
    this.updateSongState(this.props.currentSong);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentSongIndex !== this.props.currentSongIndex) {
      const { currentSong } = this.props;
      this.updateSongState(currentSong);
    }
  }

  updateSongState = (currentSong) => {
    const { btnFunction, currentSongIndex } = this.props;
    this.musicDuration = this.formatTime(
      ArrayList.Songs[currentSongIndex].duration
    );

    this.setState({
      seekBarValue: currentSong.currentTime,
      currentTimeToBeDisplay: this.formatTime(currentSong.currentTime),
    });

    this.intervalId ? clearInterval(this.intervalId) : (this.intervalId = null);

    this.intervalId = setInterval(() => {
      if (
        Math.round(currentSong.currentTime) >= Math.round(currentSong.duration)
      ) {
        clearInterval(this.intervalId);
        btnFunction.forwardBtn();
        return;
      }
      this.setState({
        seekBarValue: currentSong.currentTime,
        currentTimeToBeDisplay: this.formatTime(currentSong.currentTime),
      });
    }, 1000);
  };

  formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
      min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return `${min}  :  ${sec}`;
  };

  seekBarChange = (value) => {
    const { currentSong } = this.props;

    currentSong.currentTime = value;
    this.updateSongState(currentSong);
  };

  render() {
    const { currentSongIndex } = this.props;
    const song = ArrayList.Songs[currentSongIndex];

    return (
      <>
        <div className={styles.musicPlayer}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${song.icon})` }}
          ></div>
          <div className={styles.songDetails}>
            <div className={styles.songImage}>
              <img src={song.icon} alt="" />
            </div>
            <div className={styles.songName}>
              <h3>{song.name}</h3>
            </div>
          </div>
          <div className={styles.seekBarAndTime}>
            <div className={styles.seekBarBox}>
              <input
                type="range"
                max={song.duration}
                value={this.state.seekBarValue}
                onChange={(event) => this.seekBarChange(event.target.value)}
                className={styles.seekBar}
              />
            </div>
            <div className={styles.seekTime}>
              <div className={styles.currentTime}>
                {this.state.currentTimeToBeDisplay}
              </div>
              <div className={styles.totalTime}>{this.musicDuration}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
