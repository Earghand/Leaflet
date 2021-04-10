import React from 'react';
import "./home.scss";
import "../App"
class Home extends React.Component {
    render() {
        const { overlapGroup, signUp, login } = this.props;
        
        return (
            <div className="landing-page">
              <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <div className="signup">
                  <div className="overlap-group2 border-2px-shamrock">
                    <div className="sign-up lato-normal-black-27px">{signUp}</div>
                  </div>
                </div>
                <div className="login">
                  <div className="overlap-group1 border-2px-shamrock">
                    <h1 className="title lato-normal-black-30px">{login}</h1>
                  </div>
                </div>
              </div>
            </div>
          )
      };
    }
export default Home;