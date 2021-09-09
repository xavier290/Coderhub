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
                    <div className='button'>
                    <Button type='submit'><Link to='/signin'>SIGN IN</Link></Button>
                    </div>
                </div>
                <div className='register-part'>
                    <h1>Create Account</h1>
                    <form>
                    <div className='inputs'>
                    <div className='label'>
                    <label >Name</label>
                    </div>
                    <InputField inputSize='inputField--large' placeholder='Name' type='text' />
                    <div className='label'>
                    <label>Email</label>
                    </div>
                    <InputField inputSize='inputField--large' placeholder='Email'type='email' />
                    <div className='label'>
                    <label >Password</label>
                    </div>
                    <InputField inputSize='inputField--large' placeholder='Password' type='password' />
                    <div className='label'>
                    <label>Confirm Password</label>
                    </div>
                    <InputField inputSize='inputField--large' placeholder="Confirm Password" type='Password'></InputField>
                    </div>
                    </form>
                    <div className='button'>
                    <Button type='submit'><Link to='/'>SIGN UP</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default RegisterPage;