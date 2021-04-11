import React from 'react';
import '../css/Landing.css';
import {Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className="body">
            <img src="/images/wave.png" className="wave"/>
            <img src="/images/leaf.png" className="leaf"/>
            <div className="leaflet">leaflet</div>
            <div className='heading'>
                welcome to leaflet, a platform to explore
                your inner leaf
            </div>
            <Link to="/login"><button className="loginSubmit">Login</button></Link>
            <Link to="/signup"><button className="signSubmit">Sign Up</button></Link>
        </div>
    )
}

export default Landing;