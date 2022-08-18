import React from "react";
import "./styles.css";
class DisplayForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      pass: null,
      dis: null,
      dispass: null
    };
  }
  render() {
    return (
      <>
        <h2>class component forms</h2>
        name:
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        pass:
        <input
          type="text"
          onChange={(e) => {
            this.setState({ pass: e.target.value });
          }}
        />
        <br />
        <button
          onClick={() => {
            this.setState({ dis: this.state.name, dispass: this.state.pass });
          }}
        >
          submit
        </button>
        <h3>
          hi{this.state.dis}+{this.state.dispass}
        </h3>
      </>
    );
  }
}
export default DisplayForm;
