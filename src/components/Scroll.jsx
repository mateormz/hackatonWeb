import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Product from './Product';
import { getItemsWithPagination } from './api'; // import the function you created earlier

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [lastKey, setLastKey] = useState(null);

    const fetchMoreData = async () => {
        const { items, lastKey: newLastKey } = await getItemsWithPagination(20, lastKey);
        setProducts(products.concat(items));
        setLastKey(newLastKey);
    };

    useEffect(() => {
        fetchMoreData();
    }, []);

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={!!lastKey}
            loader={<h4>Loading...</h4>}
        >
            {products.map(product => (
                <Product key={product.id} product={product} onAddToCart={addToCart} />
            ))}
        </InfiniteScroll>
    );
};

export default ProductList;