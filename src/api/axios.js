import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key : "ab91a40da943f7058393bacc93463e53",
        language: "ko-KR",
    },
});

export default instance;