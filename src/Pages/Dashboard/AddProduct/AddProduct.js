import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();

    const handleProduct = e => {
        const name = nameRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;

        const newProduct = {name, desc, img, price};

        fetch('http://localhost:5000/products', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Car added successfully");
                e.target.reset();
            }
        })

        e.preventDefault();
    }


    return (
        <div className='my-1 container text-center box-container'>
            <h2 className='mb-4'>Add A Product</h2>
            <form onSubmit={handleProduct} className="row g-3 mx-auto mt-2 mb-4" style={{width: '90%'}}>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Car Name" ref={nameRef}/>
                </div>
                <div className="col-md-12">
                    <textarea name="desc" className="form-control" placeholder="Description" cols="20" rows="7" ref={descRef}></textarea>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="image url" ref={imgRef}/>
                </div>
                <div className="col-md-12">
                    <input type="number" className="form-control" placeholder="Car price" ref={priceRef}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary">Add New Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;