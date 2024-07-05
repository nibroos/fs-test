import axios from "axios";
// import { API } from "~/config/api";

export const useMyFetch = function () {
    const config = useRuntimeConfig();
    const API_URL = config.public.API;

    const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
    }

    const BaseApi = axios.create({
        headers: headers,
        baseURL: API_URL,
    });

    BaseApi.interceptors.request.use(config => {
        const token = localStorage.getItem("_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })


    return BaseApi;
};
