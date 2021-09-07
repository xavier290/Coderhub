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
                    <InputField type={'email'} placeholder={'Email'} />
                    <div className='LABEL'>
                    <label>Password</label>
                    </div>
                    <InputField type={'password'} placeholder={"Password"}/>
                    </div>
                    <Link to='/' className='forgot-password'>Forgot Your Password?</Link>
                    <Link to='/'><Button>SIGN IN</Button></Link>
                    </form>
                </div>
                <div className='sign-up-content'>
                    <h1>Hello Friend!</h1>
                    <p>Enter your personal details to create your account and start your journey with us!</p>
                    <Link to='/register'><Button>SIGN UP</Button></Link>
                </div>
            </div>
        </div>
    )
}



export default SignInPage;