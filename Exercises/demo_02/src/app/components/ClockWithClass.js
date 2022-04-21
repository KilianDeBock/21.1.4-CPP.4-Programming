import React from "react";

class ClockWithClass extends React.Component {
  render() {
    return <div className="test">{new Date().toLocaleTimeString()}</div>;
  }
}

export default ClockWithClass;
