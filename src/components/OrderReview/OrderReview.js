import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <h2>Count: {products.length}</h2>
        </div>
    );
};

export default OrderReview;