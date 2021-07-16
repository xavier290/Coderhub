import Footer from "../components/footer";
import InputField from "../components/inputField";

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="content">
                <div className='sign-in-part'>
                    <h1>Welcome Back!</h1>
                    <p>If you already have an account, log in with your personal info to stay connected with us.</p>
                </div>
                <div className='register-part'>
                    <h1>Create Account</h1>
                    <InputField type={'text'} />


                </div>
            </div>
        </div>
    )
}



export default RegisterPage;