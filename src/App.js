import React from "react";
import "./App.css";
import { Drumpad } from "./Drumpad/index";
import { bankOne } from "./constant";
class App extends React.Component {
  state = {
    display: false,
    displayname: "",
  };
  componentDidMount() {
    document.addEventListener("keypress", this.playSound);
  }
  activateDisplay = (key) => {
    let match = bankOne.find((data) => key === data.keyCode);

    this.setState((state) => ({
      display: !state.display,
    }));
    if (match) {
      this.setState({ displayname: match.id });
    }
  };
  playSound = (e) => {
    let sound = "";
    console.log(e);
    if (e.type === "keypress") {
      sound = document.getElementById(String(e.key).toUpperCase());
      sound.currentTime = 0;
      sound.play();
      this.activateDisplay(String(e.key).toUpperCase().charCodeAt());
      setTimeout((sound) => {
        this.activateDisplay(sound);
      }, 500);
    } else {
      sound = document.getElementById(String(e.target.innerText));
      sound.currentTime = 0;
      sound.play();
      this.activateDisplay(String(e.target.innerText).charCodeAt());
      setTimeout((sound) => {
        this.activateDisplay(sound);
      }, 500);
    }
  };
  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.displayname}</div>
        {bankOne.map((data) => {
          return (
            <Drumpad
              keyCode={data.keyCode}
              keyValue={data.keyTrigger}
              displayname={data.id}
              playSound={this.playSound}
              source={data.url}
              display={this.state.display}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
