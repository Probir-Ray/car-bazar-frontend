import React from 'react';

const Review = (props) => {
    const {name, desc, img, location} = props.review;
    return (
        
            <div className="col col-md-6 text-center">
                <div className="card p-4 m-3" style={{backgroundColor: 'rgba(249, 249, 249, 0.95)'}}>
                    <img src={img} className="card-img-top w-25 mx-auto" style={{borderRadius: '15px', width: 150, height: 150, objectFit: "cover", marginTop: '-10%'}} alt={name}/>
                    <div className="card-body">
                        <h6 className="card-text text-gray">{desc}</h6>
                        <hr/>
                        <h5 className="card-title my-3">{name}</h5>
                        <p className="card-text">{location}</p>
                    </div>
                </div>
            </div>
    );
};

export default Review;