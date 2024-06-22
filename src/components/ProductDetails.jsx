import React from 'react';
import { useParams } from 'react-router-dom';
import { addToCart } from './api'; // import the function you created earlier

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.reviewScore}</p>
            <button onClick={() => addToCart(product.id, 'userId')}>Add to cart</button>
            {/* Replace 'userId' with the actual user id */}
        </div>
    );
};

export default ProductDetails;