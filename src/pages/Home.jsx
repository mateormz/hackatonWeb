import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Reemplaza esto con la lógica para obtener el username dinámicamente

  return (
    <div>
      CLIENT
      <button onClick={() => navigate(`/carrito/${username}`)}>CARRO</button>
    </div>
  );
};

export default Home;
