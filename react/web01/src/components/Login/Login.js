import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate();

    const adminSecrets = {
        username: 'asd',
        password: 'asd'
    };

    const checkAdminSecrets = (user, pass) => {
        console.log(adminSecrets.username, adminSecrets.password);
        console.log(name, password);
        if(name === adminSecrets.username && password === adminSecrets.password){
            
            toNavigate()
        } else{
            return
        }
    } 

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const toNavigate = () => {
        navigate('/Api')
    }
    let disableButton;
    let tag;
    if (name === '' || password === '') {
        disableButton = true;
        tag = "login-button__off";
    } else {
        disableButton = false
        tag = "login-button__on";
    }

    return (
        <Fragment>
            <div className="login-box">
                <div className="label-top">
                    <label className="login-laber__top">Loginaichon</label>
                </div>
                <div>
                    <input id="username" className="login-input" type="text" placeholder="Phone number, email or username" onChange={nameChangeHandler}></input>
                </div>
                <div>
                    <input id="password" className="login-input" type="password" placeholder="Password" onChange={passwordChangeHandler}></input>
                </div>
                <div>
                    <button className={tag} disabled={disableButton} onClick={checkAdminSecrets} >Log in</button>
                </div>
                <div className="login-label">
                    <label>          OR         </label>
                </div>
                <div className="login-label">
                    <label>Login with something else</label>
                </div>
            </div>
            <div className="sign-up">
                <label>Don't have an account? -- Sign up</label>
            </div>


        </Fragment>
    )
}

export default Login;