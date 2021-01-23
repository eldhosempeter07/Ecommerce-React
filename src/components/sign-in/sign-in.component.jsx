import { Component } from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import { ButtonsContainer, SignInContainer, TitleContainer } from './sign-in.style.styles';

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }

    handleChange=(e)=>{
        const{value,name}=e.target;
        this.setState({[name]:value});
    };
    
    handleSubmit = async (event) => {
        event.preventDefault(); 
        const{email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email: "", password: "" });
      
        } catch (error) {
            console.log(error);      
        }

      };
    
    render() {
        return (
            <SignInContainer>
                <TitleContainer>I already have an account </TitleContainer>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <ButtonsContainer>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>
                    
                    </form>
            </SignInContainer>
        )
    }
}

export default SignIn
