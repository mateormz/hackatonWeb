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

  const getItem = async (itemId, token) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/item/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el item:', error.response);
      return null;
    }
  };

  const getItems = async (limit, lastKey = null) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/items`, {
        params: {
          limit: limit,
          lastKey: lastKey
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los items:', error.response);
      return null;
    }
  };
    