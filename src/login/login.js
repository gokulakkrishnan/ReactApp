import './login.css';
import React from 'react';
import signUp from '../signup/signUp.js'
class LoginPage extends React.Component {
    render() {
        return (
            <div className="content">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png" className="usericon" alt="usericon" />
                <form method="GET">
                    <div className="inner">
                        <input type="email" placeholder="Enter your Email" className="box"></input>
                        <input type="password" placeholder="Enter your Password" className="box"></input>
                        <a href='//#endregion' className="forlink">Forgot Password?</a>
                        <button>Login</button>
                        <p>Do not have account?<span><a href='/Signup' onClick={signUp}>SignUp</a></span></p>
                    </div>
                </form>
            </div>
        );
    }

}
export default LoginPage;