import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../services/api';

const ItemDetails = ({ id }) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItem = async () => {
            try {
                const itemData = await fetchProduct(id);
                setItem(itemData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getItem();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {item ? (
                <div>
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Stars: {item.stars}</p>
                    <p>Bought in last month: {item.boughtInLastMonth}</p>
                    <img src={item.imgUrl} alt={item.title} />
                    <p>Best Seller: {item.isBestSeller ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <div>No item found</div>
            )}
        </div>
    );
};

export default ItemDetails;