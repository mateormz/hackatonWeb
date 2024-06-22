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
    console.log(response.data)
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

export const buyCart = async (userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}/buy`, { userId }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al hacer la compra:', error.response);
        return null;
    }
};

export const addItemToCart = async (itemId, userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}/cart`, { itemId, userId }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al agregar el item al carrito:', error.response);
        return null;
    }
};

export const removeItemFromCart = async (itemId, userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${BACKEND_URL}/cart`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: {
                itemId,
                userId
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el item del carrito:', error.response);
        return null;
    }
};

