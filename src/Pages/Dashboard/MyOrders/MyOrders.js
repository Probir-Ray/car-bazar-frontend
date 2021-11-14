import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [product, setProduct] = useState({});
    const {user} = useAuth();
    console.log(user.email);
    const email = user.email;
    

    useEffect(()=> {
        const url = `http://localhost:5000/myOrders/${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    return (
        <div>
            <h3 className="text-center">My Orders</h3>
            {
                product.length
            }
        </div>
    );
};

export default MyOrders;