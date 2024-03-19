import React from 'react'
import RegisterSVG from '../images/register.svg';
import '../styles/login.css'
import { Link } from 'react-router-dom';
const LoginUser = () => {
    return (
        <div className='login_wrapper'>
            <div className='login'>
                <div className='logo'>
                    <h3>Welcome Back</h3>
                    <button><i className='bx bxl-google'></i>Login with Google</button>
                </div>
                <div className='separate'>
                    <hr />
                    <h4>OR LOGIN WITH EMAIL</h4>
                    <hr />
                </div>
                <div className='forms'>
                    <form className='form'>
                        <label>Email Adress</label>
                        <input type="email" name="" id="" />
                        <label>Password</label>
                        <input type="password" name="" id="" />
                    </form>
                </div>
                <div className='forgout-password'>
                    <div className='save-accounts'>
                        <input type="checkbox" name="" id="saveAccount" />
                        <label htmlFor="saveAccount">
                            Keep me logged me
                        </label>
                    </div>
                    <a href="">Forgot your password?</a>
                </div>
                <Link className='button' to='/administracion'>
                    <button>LogIn</button>
                </Link>
            </div>
            <div className='register'>
                <img src={RegisterSVG} alt="" />
            </div>
        </div>
    )
}

export default LoginUser
