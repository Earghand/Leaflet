import React from 'react';
import '../css/SignUp.css';

const SignUp = () => {
    return(
        <div className="body">
            <div className="rectangle">
                <img src="/images/cactus1.png" className="cactus1"/>
                <div className="title">leaflet</div>
                <div className="welcome">
                    Welcome to the Family!
                </div>
                <div className='description'>
                    Please enter an email and password below to sign up!
                </div>
                <form>
                    <div className="name">Name</div>
                    <input type='name' name='name' placeholder='Name' className="nameBox" required/>
                    <br></br>
                    <div className="email1">Email</div>
                    <input type='email' name='email' placeholder='Email address' className="emailBox1" required/>
                    <br></br>
                    <div className="password1">Password</div>
                    <input type='password' name='password' placeholder='Password' className="passwordBox1" requried/>
                    <br></br>
                    <button className="submit1">Create Account</button>
                </form>
                <div className="redirectSignUp1">
                    Already have an account?
                </div>
            </div>
        </div>
    )
}

export default SignUp;