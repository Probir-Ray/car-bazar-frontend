import React, { useEffect, useState } from 'react';
import Product from '../../Home/Product/Product';

const AllCar = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('https://desolate-gorge-65958.herokuapp.com/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div id='products' className='container-fluid bg-gray my-5 pt-3 pb-2'>
            <h2 className="text-center my-4">All Car</h2>
            <div className="product-box">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default AllCar;