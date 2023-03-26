import React from "react";

// inheritance of React Component
class CounterClass extends React.Component {
  constructor() {
    super();
  }

  // return html like code
  render() {
    return (
      <>
        <h1>Hello To CLass components</h1>
        <h1></h1>
      </>
    );
  }
}

export default CounterClass;

// return JSX code
// JSX code must always have one parent
// elements or <></> as a parent
