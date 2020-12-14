import './signUp.css';
import React from 'react';
class SignUpPage extends React.Component {
    render() {
        return (
            <div className="content">
                <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png" className="usericon" alt="usericon" />
                <form method="GET">
                    <div className="inner">
                        <input type="email" placeholder="Enter Email" className="box"></input>
                        <input type="password" placeholder="Enter Password" className="box"></input>
                        <button>SignUp</button>
                        <p>Do you have account?<span><a href='/'>Login</a></span></p>
                    </div>
                </form>
            </div>
        );
    }

}
export default SignUpPage;