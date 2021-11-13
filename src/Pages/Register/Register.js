import React, { useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const {user, userRegistration, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = {...loginInfo};
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }

    const handleSubmit = e => {
        if(loginInfo.password !== loginInfo.password2) {
            alert("Password didn't match");
            return;
        }
        userRegistration(loginInfo.email, loginInfo.password, loginInfo.name, history);
        e.preventDefault();
    }

    return (
        <>
        <Navigation></Navigation>
        <div className='container my-5 text-center'>
            <h2 className='my-4'>Registration Page</h2>
            <div className="w-50 mx-auto">
                {user?.email && ['success'].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    Registration Successfully
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

            {!isLoading && <form onSubmit={handleSubmit} className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="name" name="name" className="form-control py-2 mb-2" placeholder="Enter Your Name" onBlur={handleChange} required/>
                </div>
                <div className="col-md-12">
                    <input type="email" name="email" className="form-control py-2 mb-2" placeholder="Enter Your Email" onBlur={handleChange} required/>
                </div>
                <div className="col-md-12">
                    <input type="password" name="password" className="form-control py-2 mb-2" placeholder="Enter Your Password" onBlur={handleChange} required/>
                </div>
                <div className="col-md-12">
                    <input type="password" name="password2" className="form-control py-2 mb-2" placeholder="Retype Your Password" onBlur={handleChange} required/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary form-control py-2 mb-2">Register</button>
                </div>
            <p>Already have a Account? <Link to='/login'>Login here</Link></p>
            </form>}
            {
                isLoading && <Spinner animation="grow" variant="info" />
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;