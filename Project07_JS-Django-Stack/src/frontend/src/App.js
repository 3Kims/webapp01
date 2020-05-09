import React, { Component } from "react";
import Ninjas from "./ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "주혁", age: 29, belt: "Black", id: 1 },
      { name: "도연", age: 31, belt: "Red", id: 2 },
      { name: "웅영", age: 21, belt: "Brown", id: 3 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>react kinda sounds like mything</h1>
        <p>Information</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
