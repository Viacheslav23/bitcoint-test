import { connect } from "react-redux";
import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let { value } = this.state;

    if (value.length > 0) {
      window.localStorage.setItem("name", value);
    }

    console.log(
      'window.localStorage.getItem("name")',
      window.localStorage.getItem("name")
    );

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-header">Login</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter your name:
              <input
                className="login-input"
                required
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">OK</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
