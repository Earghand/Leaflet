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
        return(
            <div>
                <div>
                    leaflet
                </div>
                <form onSubmit = {this.handleSubmit}>
                    <input type='email' name='email' placeholder='Email address' required onChange={this.handleChange}/>
                    <br></br>
                    <input type='password' name='password' placeholder='Password' requried onChange={this.handleChange}/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;