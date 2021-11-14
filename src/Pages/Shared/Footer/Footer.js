import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='text-white py-4' style={{backgroundColor: '#1976d2'}}>
            <div className="container footer-top py-3 text-left">
                <div className="row">
                    <div className="col-md-4 col-sm-6 p-3">
                        <h4>About Us</h4>
                        <p>Founded in 2015 in Dhaka city, Bangladesh is one of most popular Car Seller around the South Asia. Our goal is create a safer, smarter world in which people experience the joy of mobility.</p>
                        <ul>
                            <li>Phone: +88017-333666</li>
                            <li>Email: info@carbazar.com</li>
                            <li>Head Office: Gulshan, Dhaka-1212</li>
                            <li>Corporate Office: Segunbagicha, Dhaka</li>
                            <li>Fax: +880-2-1179</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 p-3 text-center">
                        <h4 className="mb-3">Branch Office</h4>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Thamel, Kathmandu</h6>
                            <div className="date italic">Nepal</div>
                        </div>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Bilalabad, Karachi</h6>
                            <div className="date italic">Pakistan</div>
                        </div>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Semtokha, Thimpu</h6>
                            <div className="date italic">Bhutan</div>
                        </div>
                        <div className="single-post border-bottom py-2">
                            <h6 className="bolder">Paharganj, New Delhi</h6>
                            <div className="date italic">India</div>
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