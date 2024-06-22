import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

export const getRoleBasedOnToken = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
  }

export const fetchLogin = async(username, password) => {

    const response = await axios.post(`${BACKEND_URL}/auth/login`, {username, password});

    return response.data;
}

export const fetchRegister = async(username, password, role) => {

    const response = await axios.post(`${BACKEND_URL}/auth/register`, {username, password, role});
    return response.data;
}

export const getPassenger = async () => {
    const token = localStorage.getItem('token');
      const response = await axios.get(`${BACKEND_URL}/passenger/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
};

export const fetchRides = async(page) => {
    const response = await axios.get(`${BACKEND_URL}/ride/user?page=${page}&size=10`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    
    return response;
}

export const getUserCart = async (username) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}/cart/${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener el carrito del usuario:', error.response);
        return null;
    }
};

export const getItem = async (itemId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}/item/${itemId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener el item:', error.response);
        return null;
    }
};


  const deleteItem = async (itemId, token) => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/items/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el item:', error.response);
      return null;
    }
  };

  
  const editItem = async (itemData, token) => {
    try {
      const response = await axios.put(`${BACKEND_URL}/items/${itemData.itemId}`, {
        boughtInLastMonth: itemData.boughtInLastMonth,
        imgUrl: itemData.imgUrl,
        isBestSeller: itemData.isBestSeller,
        price: itemData.price,
        stars: itemData.stars,
        title: itemData.title
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al editar el item:', error.response);
      return null;
    }
  };

  const createItem = async (data, token) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/items`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al crear el item:', error.response);
      return null;
    }
  };