import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const {purchaseId} = useParams();
    console.log(purchaseId);
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();

    useEffect(()=> {
        const url = `http://localhost:5000/purchase/${purchaseId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    const onSubmit = data => {
        const id = product._id;
        data.key = id;
        const status = false;
        data.status = status;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert('Order processing');
                reset();
            }
        })
    }

    return (
        <>
            <Navigation/>
            <div className="container-fluid my-5 py-3">
                <h3 className="text-center mb-4">Purchase</h3>
                <div className="w-75 text-center mx-auto">
                    <div className="order-desc">
                        <img className="w-75 mb-3" src={product.img} alt="" />
                        <h5>{product.name}</h5>
                        <p>{product.desc}</p>
                        <h4 className="mb-4">$ {product.price}</h4>
                    </div>
                </div>
            </div>

            <div className="w-75 mx-auto my-4 py-4">
                <h3 className="text-center">Booking Information</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 mx-auto mt-2 mb-4" style={{width: '90%'}}>
                    <div className="col-md-12">
                        <input placeholder="Name" className="form-control" defaultValue={user.displayName} {...register("name")} />
                    </div>
                    <div className="col-md-12">
                        <input placeholder="Email" className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-md-12">
                        <input placeholder="Address" className="form-control" defaultValue="" {...register("address")} />
                    </div>
                    <div className="col-md-12">
                        <input placeholder="City" className="form-control" defaultValue="" {...register("city")} />
                    </div>
                    <div className="col-md-12">
                        <input placeholder="Phone Number" className="form-control" defaultValue="" {...register("phone")} />
                    </div>
                    
                        <input type="submit" className="form-control btn btn-primary"/>
                </form>                     
            </div>
            <Footer/>
        </>
    );
};

export default Purchase;