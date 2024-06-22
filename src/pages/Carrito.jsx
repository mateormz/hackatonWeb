import React, { useEffect, useState } from 'react';
import { getUserCart, getItem, buyCart, addItemToCart, removeItemFromCart } from '../services/api';
import { useParams } from 'react-router-dom';

const Carrito = () => {
  const { username } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true); // Ensure loading state is set during fetching
      try {
        const cartData = await getUserCart(username);
        
        if (cartData && cartData.products) {
          const itemsPromises = cartData.products.map(async (product) => {
            const itemData = await getItem(product.item_id);
            return {
              ...itemData,
              qty: product.qty
            };
          });
          const items = await Promise.all(itemsPromises);
          console.log(items); // Debugging
          setCartItems(items);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [username]);

  const handleBuyCart = async () => {
    try {
      const response = await buyCart(username);
      if (response && response.success) {
        setCartItems([]);
        alert('Compra realizada con éxito.');
      }
    } catch (error) {
      console.error('Error al hacer la compra:', error);
      alert('Error al realizar la compra.'); // More user-friendly error handling
    }
  };

  const handleAddItem = async (itemId) => {
    try {
      const response = await addItemToCart(itemId, username);
      if (response && response.success) {
        const updatedItems = cartItems.map(item => 
          item.itemId === itemId ? { ...item, qty: item.qty + 1 } : item
        );
        setCartItems(updatedItems);
        alert('Item agregado al carrito.');
      }
    } catch (error) {
      console.error('Error al agregar el item al carrito:', error);
      alert('Error al agregar el item.');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await removeItemFromCart(itemId, username);
      if (response && response.success) {
        const updatedItems = cartItems.filter(item => item.itemId !== itemId || item.qty > 1);
        updatedItems.forEach(item => {
          if (item.itemId === itemId) {
            item.qty -= 1;
          }
        });
        setCartItems(updatedItems);
        alert('Item eliminado del carrito.');
      }
    } catch (error) {
      console.error('Error al eliminar el item del carrito:', error);
      alert('Error al eliminar el item.');
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Carrito de {username}</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.asin} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <img src={item.imgUrl} alt={item.title} style={{ width: '100px', height: '100px' }} />
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.qty}</p>
              <button onClick={() => handleAddItem(item.asin)}>Agregar uno más</button>
              <button onClick={() => handleRemoveItem(item.asin)}>Eliminar uno</button>
            </div>
          ))}
          <button onClick={handleBuyCart}>Comprar todo</button>
        </>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Carrito;