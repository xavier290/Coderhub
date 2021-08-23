import React from 'react';

import InputField from "../components/inputField";
import SignInBtn from "../components/signInBtn";
import SignUpBtn from "../components/signUpBtn";


const RegisterPage = (props) => {
    return (

        <div className="registerPage">
            <div className="page-content">
                <div className='sign-in-part'>
                    <h1>Welcome Back!</h1>
                    <p>If you already have an account, sign in  with your personal info to stay connected with us.</p>
                    <SignInBtn />
                </div>
                <div className='register-part'>
                    <h1>Create Account</h1>
                    <form>
                    <div className='label'>
                    <label >Name</label>
                    </div>
                    <InputField
                   id='input_name' placeholder={'Name'} type={'text'} />
                    <div className='label'>
                    <label>Email</label>
                    </div>
                    <InputField id='input_email'  placeholder={'Email'} type={'email'} />
                    <div className='label'>
                    <label >Password</label>
                    </div>
                    <InputField id='input_password'  placeholder={'Password'} type={'password'} />
                    <SignUpBtn />
                    </form>
                </div>
            </div>
        </div>
    )
}



export default RegisterPage;