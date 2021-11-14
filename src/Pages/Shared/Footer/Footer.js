import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='text-white py-4' style={{backgroundColor: '#1976d2'}}>
            <div className="container footer-top py-3 text-left">
                <div className="row">
                    <div className="col-md-4 col-sm-6 p-3">
                        <h4>About Us</h4>
                        <p>Car Bazar is fast growing car saller.</p>
                        <ul>
                            <li>Phone: +88017-333666</li>
                            <li>Address: Gulshan, Dhaka-1212</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 p-3 text-center">
                        <h4 className="mb-3">Featured Location</h4>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Kakslauttanen Arctic Resort</h6>
                            <div className="date italic">Puerto Vallarta, Mexico</div>
                        </div>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">TreeHouse Villas</h6>
                            <div className="date italic">Ko Yao, Thailand</div>
                        </div>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Grand Miramar</h6>
                            <div className="date italic">Puerto Vallarta, Mexico</div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 p-3 sitemap">
                        <h4 className="mb-3">Sitemap</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><Nav.Link as={HashLink} to="/home#products">Favorite Cars</Nav.Link></li>
                            <li><Nav.Link as={HashLink} to="/home#reviews">Customer Feedback</Nav.Link></li>
                            <li><Nav.Link as={HashLink} to="/explore">All Car</Nav.Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center"><p>Copyright &copy; 2021 - Programmers Club</p></div>
        </div>
    );
};

export default Footer;