import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {id, name, img, desc, price} = props.product;
    return (
        <div className='card card-default bg-outline-success text-white text-center'>
            <img style={{height: '300px'}} src={img} alt={name} />
            <div style={{color: '#333'}} className="card-body">
                <h3>{name}</h3>
                <p>{desc}</p>
                <h2>Price: {price}</h2>
            </div>
            <div className="card-footer">
                <Link to={`/product/${id}`}><button className="btn btn-outline-white">Purchase</button></Link>
            </div>
        </div>
    );
};

export default Product;