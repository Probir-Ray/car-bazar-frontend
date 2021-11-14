import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Brand from './Brand';

const CarBrand = () => {

    const brands = [
        {
            "id": 1,
            "name": "BMW",
            "img": "https://i.ibb.co/0Kv0ZbM/bmw.png",
        },
        {
            "id": 2,
            "name": "Volvo",
            "img": "https://i.ibb.co/Sc1dk0F/volvo.png",
        },
        {
            "id": 3,
            "name": "Tesla",
            "img": "https://i.ibb.co/8bpWdQq/tesla.png",
        },
        {
            "id": 4,
            "name": "Ford",
            "img": "https://i.ibb.co/XzXDbKC/ford.png",
        }
    
    ]

    return (
        <div className="my-4">
            <h3 className="my-5 text-center">Popular Brand</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-3">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }

            </div>                 
        </div>
    );
};

export default CarBrand;