import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = {...loginInfo};
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }

    const handleLogin = e => {
        alert('hello, all')
        e.preventDefault();
    }
    return (
    <>
        <Navigation/>
        <div className='my-4 py-4 container text-center box-container'>
            <h2>Login Page</h2>
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