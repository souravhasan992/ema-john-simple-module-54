import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const { user, handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';
    const handleGoogleSignIn2 = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New To Ema-John? <br /><Link to="/register">Create New Account</Link></p>
                <div>------or------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleSignIn2}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;