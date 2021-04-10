import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import dropdown from './dropdown.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (     
        
       <BrowserRouter>
        <Home
          overlapGroup={dropdown}
          signUp="sign up"
          login="login"
        />
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path='/signup' component={SignUp}/>
             <Route path='/login' component={Login} />
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
