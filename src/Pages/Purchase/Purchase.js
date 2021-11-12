import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {purchaseId} = useParams();
    const [product, setProduct] = useState({});
    

    return (
        <div>
            
        </div>
    );
};

export default Purchase;