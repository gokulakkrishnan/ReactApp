import './signUp.css';
import React, { useState } from 'react';
import Helmet from 'react-helmet'
import { useHistory } from 'react-router-dom'
function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileno, setMobileno] = useState('');
    const history = useHistory();
    function changeEmail(event) {
        setEmail(event.target.value)
    }
    function changePassword(event) {
        setPassword(event.target.value)
    }
    function changeMobileNo(event) {
        setMobileno(event.target.value)
    }
    async function onSubmit(event) {
        event.preventDefault();
        const Email = { email }.email;
        const Password = { password }.password;
        const mobile = { mobileno }.mobileno;
        const registered = {
            emailId: Email,
            password: Password,
            mobileNo: mobile,
        }
        const result = await fetch('https://todo-application-using-nodejs.herokuapp.com/api/todo/signUp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(registered)
        });
        setEmail('');
        setPassword('')
        setMobileno('');
        const response = await result.text();
        if (response.includes("error")) {
            const a = response.split(',')[2];
            const b = a.split(':')[1].replace("}", '');
            alert(b);
        }
        else {
            alert(response)
            history.push('/')
        }
    }
    return (
        <div className="signUp">
            <div className="signUp-content">
                <Helmet>
                    <title>SignUp</title>
                </Helmet>
                <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png" className="signUp-usericon" alt="usericon" />
                <form method="POST" className='signUp-form' onSubmit={onSubmit}>
                    <div className="signUp-inner">
                        <input type="email" placeholder="Enter Email" className="signUp-box" maxLength='30' value={email} onChange={changeEmail} required></input>
                        <input type="password" placeholder="Enter Password" className="signUp-box" value={password} onChange={changePassword} required></input>
                        <input type="tel" placeholder="Enter Mobile no" className="signUp-box" maxLength='10' value={mobileno} onChange={changeMobileNo} required></input>
                        <input type="checkbox" className="signUp-check" required></input>
                        <label className="signUp-label">Agree Terms and Conditions</label>
                        <button className="signUp-button" type="submit">SignUp</button>
                        <p className='signUp-p' >Do you have account?<span className="signUp-span"><a href='/'>Login</a></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUpPage;