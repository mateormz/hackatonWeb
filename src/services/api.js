import axios from "axios";

const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com';

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