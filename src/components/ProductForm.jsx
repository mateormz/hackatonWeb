import React, { useState } from 'react';
import { createProduct } from '../services/api';

const ProductForm = () => {
    const [boughtInLastMonth, setBoughtInLastMonth] = useState(0);
    const [imgUrl, setImgUrl] = useState('');
    const [isBestSeller, setIsBestSeller] = useState(false);
    const [price, setPrice] = useState(0.0);
    const [stars, setStars] = useState(0);
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createProduct(boughtInLastMonth, imgUrl, isBestSeller, price, stars, title);
            console.log('Item created successfully', response);
        } catch (error) {
            console.error('Error creating item', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Bought In Last Month:</label>
                <input type="number" value={boughtInLastMonth} onChange={(e) => setBoughtInLastMonth(parseInt(e.target.value))} required />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
            </div>
            <div>
                <label>Is Best Seller:</label>
                <input type="checkbox" checked={isBestSeller} onChange={(e) => setIsBestSeller(e.target.checked)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
            </div>
            <div>
                <label>Stars:</label>
                <input type="number" value={stars} onChange={(e) => setStars(parseInt(e.target.value))} min="0" max="5" required />
            </div>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <button type="submit">Create Item</button>
        </form>
    );
};

export default ProductForm;
