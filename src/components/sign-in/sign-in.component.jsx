import React from 'react'

import './sign-in.styles.scss'
import FormInput from './../form-input/form-input.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import CustomButton from './../custom-button/custom-button.component'

class SignIn extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit= (event)=>{
        event.preventDefault();

        this.setState({email:'', password:''});

    }

    // we can directly change state in the arrow functions 

    handleChange = (event)=>{

        const {value, name} = event.target

        this.setState({[name]:value})

    }

    // learning one thing about the span tags 
    render(){
        return(
            <div className="sign-in">
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required/>
                  

                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    label="password"
                    handleChange={this.handleChange}
                    required/>
                 
                    <CustomButton type="submit" value= "Submit Form"> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn