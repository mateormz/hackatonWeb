import axios from "axios";

const BACKEND_URL = 'http://127.0.0.1:8080';

export const fetchLogin = async(username, password) => {

    const response = await axios.post(`${BACKEND_URL}/auth/login`, {username, password});

    return response.data;
}

export const fetchRegister = async(username, password, role) => {

    const response = await axios.post(`${BACKEND_URL}/auth/register`, {username, password, role});
    return response.data;
}

export const postItem = async(body) => {
    const response = await axios.post(`${BACKEND_URL}/items`, body, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const updateItem = async(body) => {
    const response = await axios.put(`${BACKEND_URL}/items`, body, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const deleteItem = async(id) => {
    const response = await axios.delete(`${BACKEND_URL}/item/${id}`, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const getItem = async(id) => {
    const response = await axios.get(`${BACKEND_URL}/item/${id}`, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const getItemsWithPagination = async(limit, lastKey) => {
    const response = await axios.get(`${BACKEND_URL}/items?limit=${limit}&lastKey=${lastKey}`, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const buyCart = async(userId) => {
    const response = await axios.post(`${BACKEND_URL}/buy`, { userId }, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const addToCart = async(itemId, userId) => {
    const response = await axios.post(`${BACKEND_URL}/cart`, { itemId, userId }, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const removeFromCart = async(itemId, userId) => {
    const response = await axios.delete(`${BACKEND_URL}/cart`, {
        data: { itemId, userId },
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;
}

export const getUserCart = async(userId) => {
    const response = await axios.get(`${BACKEND_URL}/cart/${userId}`, {
        headers: {
            Authorization: `bearer ${localStorage.getItem('token')}`,
        }
    });
    return response.data;

}