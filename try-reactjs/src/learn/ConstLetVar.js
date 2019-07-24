import React, { Component } from "react";

class ConstLetVar extends Component {
  constructor(props) {
    super(props);
    let someVar = "Hello World";
    someVar = "hello there again my old friend";
    console.log(someVar);
  }

  render() {
    // someVar = "hello there again my old friend";
    // console.log(someVar);
    return <h1>Hello World</h1>;
  }
}

export default ConstLetVar;
