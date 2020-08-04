const axios = require('axios');

// calls to the backend
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;