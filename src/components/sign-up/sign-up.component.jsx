import { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.style";

export const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          label="Display Name"
          value={displayName}
          name="displayName"
        />
        <FormInput
          type="email"
          onChange={handleChange}
          label="Email"
          value={email}
          name="email"
        />

        <FormInput
          type="password"
          onChange={handleChange}
          label="Password"
          value={password}
          name="password"
        />

        <FormInput
          type="password"
          onChange={handleChange}
          label="Confirm Password "
          value={confirmPassword}
          name="confirmPassword"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
