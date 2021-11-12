import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])
    return (
        <div id='products' className='container-fluid bg-gray my-5 pt-3 pb-2'>
            <h2 className="text-center my-3">Products</h2>
            <div className="product-box">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;