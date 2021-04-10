import React from 'react';
import "./home.scss";
import dropdown from '../dropdown.svg';

class Home extends React.Component {
    render() {

        return (
            <div className="landing-page">
              <div className="overlap-group" style={{ backgroundImage: `url(${dropdown})` }}>
              </div>
            </div>
          )
      };
    }
export default Home;