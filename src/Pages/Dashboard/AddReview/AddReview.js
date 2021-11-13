import React, { useRef } from 'react';


const AddReview = () => {
    const nameRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();
    const locationRef = useRef();

    const handleReview = e => {
        const name = nameRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        const location = locationRef.current.value;

        const newReview = {name, desc, img, location};

        fetch('http://localhost:5000/reviews', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Review added successfully");
                e.target.reset();
            }
        })

        e.preventDefault();
    }


    return (
        <div className='my-1 container text-center box-container'>
            <h2 className='mb-4'>Add A Review</h2>
            <form onSubmit={handleReview} className="row g-3 mx-auto mt-2 mb-4" style={{width: '90%'}}>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Add Username" ref={nameRef}/>
                </div>
                <div className="col-md-12">
                    <textarea name="desc" className="form-control" placeholder="Review Description" cols="20" rows="7" ref={descRef}></textarea>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="image url" ref={imgRef}/>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Location" ref={locationRef}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="form-control btn btn-primary">Add New Review</button>
                </div>
            </form>
        </div>
    );
};


export default AddReview;