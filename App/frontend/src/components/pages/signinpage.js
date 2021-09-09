import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from '../components/button';
import InputField from '../components/inputField';


const SignInPage = (props)=>{
    return(
        <div className="SignInPage">
            <div className='CONTENT'>
                <div className='sign-in-content'>
                    <h1>Sign In to Coderhub</h1>
                    <form>
                    <div className='inputs'>
                    <div className='LABEL'>
                    <label>Email</label>
                    </div>
                    <InputField inputSize='inputField--large' type='email' placeholder='Email' />
                    <div className='LABEL'>
                    <label>Password</label>
                    </div>
                    <InputField inputSize='inputField--large' type='password' placeholder="Password"/>
                    </div>
                    <Link to='/' className='forgot-password'>Forgot Your Password?</Link>
                    <div className='buttton'>
                    <Button><Link to='/'>SIGN IN</Link></Button>
                    </div>
                    </form>
                </div>
                <div className='sign-up-content'>
                    <h1>Hey, Programmer!</h1>
                    <p>Enter your personal details to create your account and start your journey with us!</p>
                    <div className='button'>
                    <Button><Link to='/'>SIGN UP</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SignInPage;