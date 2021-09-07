import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import InputField from "../components/inputField";
import Button from "../components/button";


const RegisterPage = (props) => {
    return (

        <div className="registerPage">
            <div className="page-content">
                <div className='sign-in-part'>
                    <h1>Welcome Back!</h1>
                    <p>If you already have an account, sign in  with your personal info to stay connected with us.</p>
                    <Link to='/signin'><Button type='submit'>SIGN IN</Button></Link>
                </div>
                <div className='register-part'>
                    <h1>Create Account</h1>
                    <form>
                    <div className='inputs'>
                    <div className='label'>
                    <label >Name</label>
                    </div>
                    <InputField id='input_name' placeholder={'Name'} type={'text'} />
                    <div className='label'>
                    <label>Email</label>
                    </div>
                    <InputField id='input_email'  placeholder={'Email'} type={'email'} />
                    <div className='label'>
                    <label >Password</label>
                    </div>
                    <InputField id='input_password'  placeholder={'Password'} type={'password'} />
                    </div>
                    </form>
                    <Link><Button type='submit'>SIGN UP</Button></Link>
                </div>
            </div>
        </div>
    )
}



export default RegisterPage;