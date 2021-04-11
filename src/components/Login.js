import React from 'react';
import '../css/Login.css';

const Login = () => {
    return(
        <div className="body">
            <div className="rectangle">
                <img src="/images/cactus.png" className="cactus"/>
                <div className="title">leaflet</div>
                <div className="welcome">
                    Welcome back!
                </div>
                <div className='description'>
                    Please enter your email and password below to login!
                </div>
                <form>
                    <div className="email">Email</div>
                    <input type='email' name='email' placeholder='Email address' className="emailBox" required/>
                    <br></br>
                    <div className="password">Password</div>
                    <input type='password' name='password' placeholder='Password' className="passwordBox" requried/>
                    <br></br>
                    <button className="submit">Login</button>
                </form>
                <div className="redirectSignUp">
                    Don't have an account?
                </div>
            </div>
        </div>
    )
}

export default Login;