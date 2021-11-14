import React from 'react';

const Brand = (props) => {
    const {name, img} = props.brand;
    
    return (
        <div className="col col-md-4 col-sm-6">
            <div className="card p-4" style={{backgroundColor: 'tomato'}}>
                <img style={{width: '100%'}} src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title text-white text-center">{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default Brand;