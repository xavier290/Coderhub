import InputField from "../components/inputField";
import React from 'react';

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="cnt">
                <div className='log-in-part'>
                    <h1>Welcome Back!</h1>
                    <p>If you already have an account, login with your personal info to stay connected with us.</p>
                    <button>Log In</button>
                </div>
                <div className='register-part'>
                    <h1>Create Account</h1>
                    <label >Username</label>
                    <InputField id='input_username' type={'text'} />
                    <label>Email</label>
                    <InputField id='input_email' typpe={'email'} />
                    <label >Password</label>
                    <InputField id='input_password' type={'password'} />
                <button type='submit'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}



export default RegisterPage;