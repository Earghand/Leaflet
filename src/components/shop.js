import React from 'react';
import '../css/Shop.css';
import {useState, useEffect} from 'react';
import fire from "../fire";

function Shop() {

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
        <div>
            <div className="nav">
                <div className="leaflet1">leaflet</div>
                <div className="points">
                    <img src="/images/leaf1.png"/>
                    <div className="point">250</div>
                </div>
                <div className="shop">
                <img src="/images/shop.png"/>
                    <div className="shopWord">shop</div>
                </div>
                <div className="profile">
                <img src="/images/profile.png"/>
                    <div className="profileWord">profile</div>
                </div>
            </div>
            <div className="shop">
                <p className="shopTitle">Shop</p>
                <ul>
                <label className="tasks">Party Hat</label>
                <img src="/images/caretRight.png" className="caretRight" id="caret"/><br></br>
                <label className="tasks">Sunglasses</label>
                <img src="/images/caretRight.png" className="caretRight"/><br></br>
                <label className="tasks">Couch</label>
                <img src="/images/caretRight.png" className="caretRight"/><br></br>
                </ul>
                
            </div>
            <div className="roombg">
                <p className="roomTitle">Your Room</p>
                <ul>
                <img src="/images/partyHat.png" className="partyHat" id="partyHat"/>
                <img src="/images/cactus.png" className="cactus" id="cactus"/>
                <img src="/images/sunglasses.png" className="sunglasses" id="sunglasses"/>
                <img src="/images/couch.png" className="couch" id="couch"/>
                </ul>
            </div>
                
        </div>
    )
}

export default Shop;