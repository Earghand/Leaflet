import React from 'react';

class SignUp extends React.Component {
    render() {
      const {
        text1,
        leaflet,
        text2,
        inputType,
        inputPlaceholder,
        text3,
        email,
        inputType2,
        inputPlaceholder2,
        password,
        x6B6E14D50B26268De05E93A2671Badf1Re,
        buttonProps,
      } = this.props;
  
      return (
        <div className="sign-up">
          <div className="overlap-group">
            <div className="text-1 montserrat-regular-normal-endeavour-18px">{text1}</div>
            <img className="leaflet" src={leaflet} />
            <h1 className="text-2 montserrat-medium-black-36px">{text2}</h1>
            <div className="rectangle-16"></div>
            <input
              className="johndoegmailcom montserrat-regular-normal-black-18px"
              name="johndoegmailcom"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
            <div className="text-3 montserrat-regular-normal-black-18px">{text3}</div>
            <div className="email montserrat-regular-normal-black-18px">{email}</div>
            <div className="rectangle-17"></div>
            <input
              className="examplepassword1234 montserrat-regular-normal-black-18px"
              name="examplepassword1234"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
            <Button>{buttonProps.children}</Button>
            <div className="password montserrat-regular-normal-black-18px">{password}</div>
            <img className="x6b6e14d50b26268-ovebg-preview-1" src={x6B6E14D50B26268De05E93A2671Badf1Re} />
          </div>
        </div>
      );
    }
  }
  
  
  class Button extends React.Component {
    render() {
      const { children } = this.props;
  
      return (
        <div className="button">
          <div className="overlap-group1">
            <div className="rectangle-18"></div>
            <div className="create-account montserrat-regular-normal-white-18px">{children}</div>
          </div>
        </div>
      );
    }
  }
  
  const buttonData = {
      children: "Create Account",
  };
  
  const SignUpData = {
      text1: "Already have an account?",
      leaflet: "leaflet.png",
      text2: "Welcome to the Family!",
      inputType: "text",
      inputPlaceholder: "johndoe@gmail.com",
      text3: "Please enter an email and password below to sign up!",
      email: "Email",
      inputType2: "password",
      inputPlaceholder2: "samplepassword1234",
      password: "Password",
      x6B6E14D50B26268De05E93A2671Badf1Re: "6b6e14d50b26268de05e93a2671badf1-removebg-preview-1.png",
      buttonProps: buttonData,
  }

export default SignUp;