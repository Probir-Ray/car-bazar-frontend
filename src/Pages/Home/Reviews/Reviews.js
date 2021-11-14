import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
const [reviews, setReviews] = useState([]);

useEffect(()=> {
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data => setReviews(data));
}, [])


    return (
        <div id="reviews" className='container-fluid my-5 py-5' style={{backgroundColor: '#1976d2'}}>
            <h3 className="text-white my-4 py-3 text-center">Reviews</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;