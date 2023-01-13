import axios from "axios";

const instance = axios.create( {
	baseURL: 'http://localhost:8000',
	headers: {
		'X-Api-Key': process.env.REACT_APP_API_KEY
	}

} );

export default instance;
