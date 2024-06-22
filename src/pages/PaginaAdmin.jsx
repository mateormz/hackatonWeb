import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ItemDetails from '../components/ItemDetails';

const PaginaAdmin = () => {
    const [itemId, setItemId] = useState('');

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
                {itemId && <ItemDetails id={itemId} />}
            </div>
        </div>
    );
};

export default PaginaAdmin;