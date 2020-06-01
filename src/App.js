import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }

  turn() {
    this.setState({
      isShow: !this.state.isShow,
    });
    console.log("change!" + this.state.isShow)
  }

  render() {
    const isShow = this.state.isShow;
    return (
      <div className="App">
        <button onClick={this.turn.bind(this)}>Modal</button>
        {
          isShow && <Modal onClick={this.turn.bind(this)} isShow={isShow}/>
        }
      </div>
    );
  }
}

export default App;
