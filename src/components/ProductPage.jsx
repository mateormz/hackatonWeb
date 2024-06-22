import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../services/api';
import ProductItem from './ProductItem';

const ProductPage = ({ match }) => {
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const productData = await fetchProduct(id);
                setProduct(productData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {product ? <ProductItem product={product} /> : <div>No product found</div>}
        </div>
    );
};

export default ProductPage;