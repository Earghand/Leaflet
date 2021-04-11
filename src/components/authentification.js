import React from 'react';
import { useState, useEffect } from "react";
import fire from '../fire'

const authentification = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('')
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, passowrd)
            .catch(err =>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                      case "auth/wrong-password":
                          setPasswordError(err.message);
                          break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, passowrd)
            .catch(err =>{
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                      case "auth/weak-password":
                          setPasswordError(err.message);
                          break;
                }
            });
        }
    
    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            }
            else {
                setUser('');
            }
        })
    };
    
    useEffect(() => {
        authListener();
    }, [])

    return (
        <div className="App">
            <h1>Hello world</h1>
        </div>
    );
};

export default authentification;