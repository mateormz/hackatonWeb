import axios from "axios";

const BACKEND_URL = 'http://127.0.0.1:8080';

export const fetchLogin = async(email, password) => {

    const response = await axios.post(`${BACKEND_URL}/auth/login`, {email, password});

    return response.data;
}

export const fetchRegister = async(firstName, lastName, email, password, isDriver, phone) => {

    const response = await axios.post(`${BACKEND_URL}/auth/register`, {firstName, lastName, email, password, isDriver, phone});
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