import React from 'react';

const Brand = (props) => {
    const {name, img} = props.brand;
    
    return (
        <div className="col col-md-3">
            <div className="card bg-info p-4">
                <img style={{width: '100%'}} src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-white">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Brand;