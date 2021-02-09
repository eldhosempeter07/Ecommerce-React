import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import {
  ButtonsContainer,
  SignInContainer,
  TitleContainer,
} from "./sign-in.style.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";
import { connect } from "react-redux";
import { useState } from "react";

export const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };
  return (
    <SignInContainer>
      <TitleContainer>I already have an account </TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={this.handleChange}
          label="password"
          required
        />

        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
