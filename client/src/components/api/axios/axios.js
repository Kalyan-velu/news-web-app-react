import axios from "axios";

const api = axios.create( {
	baseURL: 'https://news-web-app.onrender.com/api'
} );

export default api;
