import axios from "axios";

const api = axios.create({
	baseURL: 'https://news-web-app.onrender.com/api/v2/'
});

export default api;
