import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {
    return (
        <>
        <Navigation></Navigation>
        <div className='container my-5 text-center'>
            <h2 className='my-4'>Registration Page</h2>

            <form className="row g-3 w-50 mx-auto mt-2 mb-4">
                <div className="col-md-12">
                    <input type="email" className="form-control py-2 mb-2" placeholder="Enter Your Email" required/>
                </div>
                <div className="col-md-12">
                    <input type="password" className="form-control py-2 mb-2" placeholder="Enter Your Password" required/>
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