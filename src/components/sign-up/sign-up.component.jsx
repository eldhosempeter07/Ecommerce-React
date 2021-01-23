import { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { CustomButton } from '../custom-button/custom-button.component'
import { FormInput } from '../form-input/form-input.component'
import { SignUpContainer, SignUpTitle } from './sign-up.style'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmPassword:''
        }
    }

    handleSubmit = async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state
        
        if(password !== confirmPassword ){
            alert("Password don't match");
            return;
        }          
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''

            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }


    
    render() {
        const {displayName,email,password,confirmPassword} = this.state
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password </span>
                
                <form onSubmit = {this.handleSubmit}>

                    <FormInput
                        type='text'
                        onChange = {this.handleChange}
                        label = "Display Name"
                        value = {displayName}
                        name= "displayName"
                    />
                    <FormInput
                        type='email'
                        onChange = {this.handleChange}
                        label = "Email"
                        value = {email}
                        name= "email"
                    />

                    <FormInput
                        type='password'
                        onChange = {this.handleChange}
                        label = "Password"
                        value = {password}
                        name= "password"
                    />

                    <FormInput
                        type='password'
                        onChange = {this.handleChange}
                        label = "Confirm Password "
                        value = {confirmPassword}
                        name= "confirmPassword"
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>


                </form>
   
            </SignUpContainer>
        )
    }
}

export default SignUp
