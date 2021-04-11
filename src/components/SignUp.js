import React from 'react';
import '../css/SignUp.css';
import {useState, useEffect} from 'react';
import fire from "../fire";

function SignUp() {
    


    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){ 
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }
    

    useEffect(() => {

    }, []);


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
                    <input 
                        type='name' 
                        name='name' 
                        placeholder='Name' 
                        className="nameBox" 
                        required/>
                    <br></br>
                    <div className="email1">Email</div>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email Address' 
                        className="emailBox1" 
                        required value = {email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <br></br>
                    <div className="password1">Password</div>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        className="passwordBox1" 
                        requried value = {password}
                        onChange={e=> setPassword(e.target.value)}/>
                    <br></br>
                    <button className="submit1" onClick={handleSignup}>Create Account</button>
                </form>
                <div className="redirectSignUp1">
                <a href = "http://localhost:3000/login"> Already have an account? </a>
                </div>
            </div>
        </div>
    )
}

export default SignUp;