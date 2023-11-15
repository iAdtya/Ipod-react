import './styles/App.css';
import React,{Component} from 'react';
import IPod from './IPod.js';

export default class App extends Component {

  // constructor(){
  //   super();
  //   this.wheelref = React.createRef();
  //   this.zingtouch = null
  //   this.distance = 0;
    
  // }
  render(){
    return(
      <>
       <IPod
          // selectedMenu={this.state.selectedMenu} 
          // selectedOption={this.state.selectedOption}
          // singlePage={this.state.singlePage}
          // currentSong={this.state.currentSong}

          // currentSongIndex={this.currentSongIndex}
          // btnFunction={this.btnFunction}
          // wheelRef={this.wheelRef}
        />
      </>
    )
  }

}