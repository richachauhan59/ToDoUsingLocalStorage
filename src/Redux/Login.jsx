import React from "react";
import { authSuccess } from "../Redux/actions";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    const { authSuccess } = this.props;
    const { email, password } = this.state;
    authSuccess(email, password);
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>Login</h1>
        <div>
          <input
            name="email"
            value={email}
            placeholder="enter email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            name="password"
            value={password}
            placeholder="enter password"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = (dispatch) => ({
  authSuccess: (email, password) => dispatch(authSuccess(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
