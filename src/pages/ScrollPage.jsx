import React, { useState, useEffect } from 'react';
import { getItems } from '../services/api';
import ProductItem from '../components/ProductItem';

const ScrollPage = () => {
  const [data, setData] = useState([]);
  const [lastKey, setLastKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (initial = false) => {
    setIsLoading(true);

    const response = await getItems(5, lastKey);

    if (response && response.items) {
      setData(prevData => initial ? response.items : [...prevData, ...response.items]);
      setLastKey(response.lastKey.asin);
    }
    setIsLoading(false);
  }

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200 && !isLoading) {
      getData();
    }
  };

  useEffect(() => {
    getData(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <h1>Products</h1>
      {data.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
      {isLoading && <p>Loading more products...</p>}
    </>
  );
}

export default ScrollPage;