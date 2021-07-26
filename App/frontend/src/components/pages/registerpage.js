import React from 'react';

import InputField from "../components/inputField";
import SignInBtn from "../components/SignInBtn";
import SignUpBtn from "../components/SignUpBtn";



const RegisterPage = () => {
    return (
        <div className="registerPage">
            <div className="cnt">
                <div className='log-in-part'>
                    <h1>Welcome Back!</h1>
                    <p>If you already have an account, sign in  with your personal info to stay connected with us.</p>
                    <SignInBtn />
                </div>
                <div className='register-part'>
                    <h1>Create Account</h1>
                    <label >Name</label>
                    <InputField id='input_name' placeholder='Name' type={'text'} />
                    <label>Email</label>
                    <InputField id='input_email'  placeholder='Email' type={'email'} />
                    <label >Password</label>
                    <InputField id='input_password'  placeholder='Password' type={'password'} />
                    <SignUpBtn />
                </div>
            </div>
        </div>
    )
}



export default RegisterPage;