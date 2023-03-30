export const BASE_URL = 'https://noknok.onrender.com/api/v1/auth';
export const LIVE_IMAGE_URL = 'https://noknok.onrender.com/api/v1/auth';

import axios from "axios";
import dayjs from 'dayjs';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const axiosInstanceWithAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${AsyncStorage.getItem('userToken')}`,
    },
});

axiosInstanceWithAuth.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('userToken');
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        const decoded = jwt_decode(token);
        const currentTime = dayjs().unix();
        if (decoded.exp > currentTime) {
            return config;
        }   
        if (decoded.exp < currentTime) {
            const response = await axios.post(`${BASE_URL}/refresh-token`, {
                "refreshToken": refreshToken
            });

          
            AsyncStorage.setItem('userToken', response.data.data.accessToken);
            AsyncStorage.setItem('refreshToken', response.data.data.refreshToken);
            config.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
        }
        return config;   
    },
);

            



           


       
            