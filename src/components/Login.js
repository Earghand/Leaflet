import React from 'react';

class Login extends React.Component{
    state={
        email:'',
        password:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render(){
        const title = {
            padding: "10px",
            fontSize: 100
        }
        const entire = {
            color: "black",
            width:"100%",
            height:"100%"
        }
        
        return(
            <div style={entire}>
                <div style={title}>leaflet</div>
                <div id='subhheading'>
                    Welcome to the family!
                    
                </div>
                <div id='description'>
                    Please enter an email and password below to sign up!
                </div>
                <form onSubmit = {this.handleSubmit}>
                    <input type='email' name='email' placeholder='Email address' required onChange={this.handleChange}/>
                    <br></br>
                    <input type='password' name='password' placeholder='Password' requried onChange={this.handleChange}/>
                    <br></br>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}

export default Login;