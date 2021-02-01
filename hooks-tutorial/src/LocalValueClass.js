import React, { Component } from "react";

class LocalValueClass extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  };
  printId = () => {
    console.log(this.id);
  };
  render() {
    return <div></div>;
  }
}

export default LocalValueClass;
