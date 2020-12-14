
import './App.css';
import LoginPage from "./login/login.js";
import SignUpPage from "./signup/signUp.js"
import { BrowserRouter as Router,Route} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import React from 'react';
const Login = () =>(
<DocumentTitle title='Login'>
  <LoginPage />
  </DocumentTitle>
);
const Signup = () =>(
<DocumentTitle title='SignUp'>
<SignUpPage />
</DocumentTitle>);
class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
        </div>
      </Router>

    )
  }
}
export default App;
