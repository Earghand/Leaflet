import React from 'react';

const SignUp = () => {
    return(
        <div>
            <form>
                <input type='email' name='email' placeholder='Email address' required />
                <input type='password' name='password' placeholder='Password' requried />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;