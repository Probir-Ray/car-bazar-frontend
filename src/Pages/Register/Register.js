import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = {...loginInfo};
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }

    const handleSignIn = e => {
        if(loginInfo.password !== loginInfo.password2) {
            alert("Password didn't match");
            return;
        }
        alert('hello, all')
        e.preventDefault();
    }

    return (
        <>
        <Navigation></Navigation>
        <div className='container my-5 text-center'>
            <h2 className='my-4'>Registration Page</h2>

            <form onSubmit={handleSignIn} className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="email" name="email" className="form-control py-2 mb-2" placeholder="Enter Your Email" onChange={handleChange} required/>
                </div>
                <div className="col-md-12">
                    <input type="password" name="password" className="form-control py-2 mb-2" placeholder="Enter Your Password" onChange={handleChange} required/>
                </div>
                <div className="col-md-12">
                    <input type="password" name="password2" className="form-control py-2 mb-2" placeholder="Retype Your Password" onChange={handleChange} required/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary form-control py-2 mb-2">Register</button>
                </div>
            </form>
            <p>Already have a Account? <Link to='/login'>Login here</Link></p>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;