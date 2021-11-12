import React, { useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const {user, userLogin, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = {...loginInfo};
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }

    const handleLogin = e => {
        userLogin(loginInfo.email, loginInfo.password, location, history);
        e.preventDefault();
    }
    return (
    <>
        <Navigation/>
        <div className='my-4 py-4 container text-center box-container'>
            <h2>Login Page</h2>
            <div className="w-50 mx-auto">
                {user?.email && ['success'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    Login Successfully
                </Alert>
                ))}
            </div>
            <div className="w-50 mx-auto">
                {authError && ['danger'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    {authError}
                </Alert>
                ))}
            </div>
            <form onSubmit={handleLogin} className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="text" name="email" className="form-control py-2 mb-2" onChange={handleChange} placeholder="Enter Your Email"/>
                </div>
                <div className="col-md-12">
                    <input type="password" name="password" className="form-control py-2 mb-2" onChange={handleChange} placeholder="Enter Your Password"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary py-2 mb-2">Login</button>
                </div>
            </form>
            {
                isLoading && <Spinner animation="grow" variant="info" />
            }
            <p>Or</p>
            <button className="btn btn-danger py-2">Google Sign In</button>
            <br/>
            <br/>
            <p>No Account? <Link to='/register'>Register here</Link></p>
        </div>
        <Footer/>
    </>
    );
};

export default Login;