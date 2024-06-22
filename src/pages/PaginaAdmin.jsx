import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const PaginaAdmin = () => {
    const [itemId, setItemId] = useState('');
    const navigate = useNavigate();

    const handleViewItem = () => {
        navigate('/product');
    };

    return (
        <div>
            <h1>ADMIN</h1>
            <ProductForm />
            <div>
                <h2>Get Item Details</h2>
                <input 
                    type="text" 
                    value={itemId} 
                    onChange={(e) => setItemId(e.target.value)} 
                    placeholder="Enter Item ID" 
                />
                <button onClick={handleViewItem} disabled={!itemId}>
                    View Item
                </button>
            </div>
        </div>
    );
};

export default PaginaAdmin;
