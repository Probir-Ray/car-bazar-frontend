import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
const [reviews, setReviews] = useState([]);

useEffect(()=> {
    fetch('reviews.json').then(res => res.json()).then(data => setReviews(data));
}, [])


    return (
        <div id="reviews" className='container-fluid bg-info my-5 py-5'>
            <h3 className="text-white my-4">Reviews</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;