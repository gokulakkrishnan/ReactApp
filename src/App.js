
import './App.css';
import LoginPage from "./components/login/login.js";
import SignUpPage from "./components/signup/signUp.js"
import Dash from "./components/dashboard/dash.js"
import { BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
const Login = () =>(<LoginPage />);
const Signup = () =>(<SignUpPage />);
const DashBoard = () =>(<Dash />);
class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/dashboard" component={DashBoard} />
        </div>
      </Router>

    )
  }
}
export default App;
