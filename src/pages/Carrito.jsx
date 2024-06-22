import React, { useEffect, useState } from 'react';
import { getUserCart, getItem } from '../services/api';

const Carrito = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userId = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        const cartData = await getUserCart(userId);
        
        if (cartData && cartData.products) {
          const itemsPromises = cartData.products.map(async (product) => {
            const itemData = await getItem(product.item_id, token);
            return {
              ...itemData,
              qty: product.qty
            };
          });
          const items = await Promise.all(itemsPromises);
          setCartItems(items);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.itemId} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={item.imgUrl} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.qty}</p>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Carrito;
