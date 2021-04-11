import React from 'react';
import '../css/Login.css';
import {useState, useEffect} from 'react';
import fire from "../fire";

function Login() {

    const [user, setUser] = useState('');
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const [emailError1, setEmailError1] = useState('');
    const [passwordError1, setPasswordError1] = useState('');
    

    const clearInputs = () => {
        setEmail1('');
        setPassword1('');
    }

    const clearErrors = () => {
        setEmailError1('');
        setPasswordError1('');
    }
    

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email1, password1)
            .catch(err => {
                switch(err.code){ 
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError1(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError1(err.message);
                        break;
                }
            })
    }

    const authListerner = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            }
            else{
                setUser("");
            }
        })
    }

    useEffect(() => {

    }, []);

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
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email address' 
                        className="emailBox" 
                        required
                        value = {email1}
                        onChange = {(e) => setEmail1(e.target.value)}
                        />
                    <br></br>
                    <div className="password">Password</div>
                    <input 
                        type='password'
                        name='password' 
                        placeholder='Password' 
                        className="passwordBox" 
                        requried
                        value = {password1}
                        onChange = {(e) => setPassword1(e.target.value)}
                        />
                    <br></br>
                    <button className="submit" onClick={handleLogin}>Login</button>
                </form>
                <div className="redirectSignUp">
                    Don't have an account?
                </div>
            </div>
        </div>
    )
}

export default Login;