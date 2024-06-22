import React from 'react';

const ProductItem = ({ product }) => (
  <section className='bg-gray-600 m-2 p-4'>
    <div className='flex items-center'>
      <b className='ml-2'>boughtInLastMonth:</b>
      <p id='boughtInLastMonth' className='ml-2'>{product.boughtInLastMonth}</p>
    </div>

    <div className='flex items-center'>
      <img src={product.imgUrl} alt="" />
    </div>

    <div className='flex items-center'>
      <b className='ml-2'>isBestSeller:</b>
      <p id='isBestSeller' className='ml-2'>{product.isBestSeller}</p>
    </div>

    <div className='flex items-center'>
      <b className='ml-2'>price:</b>
      <p id='price' className='ml-2'>{product.price}</p>
    </div>

    <div className='flex items-center'>
      <b className='ml-2'>stars:</b>
      <p id='stars' className='ml-2'>{product.stars}</p>
    </div>

    <div className='flex items-center'>
      <b className='ml-2'>title:</b>
      <p id='title' className='ml-2'>{product.title}</p>
    </div>
  </section>
);

export default ProductItem;