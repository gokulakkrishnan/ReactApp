import './login.css';
import React, { useState } from 'react';
import Helmet from 'react-helmet'
import { useHistory } from 'react-router-dom'
function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    function changeEmail(event) {
        setEmail(event.target.value)
    }
    function changePassword(event) {
        setPassword(event.target.value)
    }
    async function onSubmit(event) {
        event.preventDefault();
        const Email = { email }.email;
        const Password = { password }.password;
        const registered = {
            emailId: Email,
            password: Password
        }
        const result = await fetch('https://todo-application-using-nodejs.herokuapp.com/api/todo/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(registered)
        });
        setEmail('');
        setPassword('')
        const response = await result.text();
        if (response.includes("error")) {
            const a = response.split(',')[2];
            const b = a.split(':')[1].replace("}", '');
            alert(b);
        }
        else {
            localStorage.setItem('token', response);
            history.push('/dashboard')
        }
    }
    return (
        <div className="login">
            <div className="login-content">
                <Helmet>
                    <title>Login</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                </Helmet>
                <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png" className="login-usericon" alt="usericon" />
                <form method="POST" className="login-form" onSubmit={onSubmit}>
                    <div className="login-inner">
                        <input type="email" placeholder="Enter your Email" className="login-box" onChange={changeEmail} value={email}></input>
                        <input type="password" placeholder="Enter your Password" className="login-box" onChange={changePassword} value={password}></input>
                        <a href='//#endregion' className="login-forlink">Forgot Password?</a>
                        <button className="login-button" type="submit">Login</button>
                        <p className="login-p">Do not have account?<span ><a href='/Signup' className='login-span'>SignUp</a></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;