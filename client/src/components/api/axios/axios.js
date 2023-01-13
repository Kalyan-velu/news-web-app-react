import axios from "axios";

const instance = axios.create( {
	baseURL: 'https://newsapi.org/v2',
	headers: {
		'X-Api-Key': process.env.REACT_APP_API_KEY
	}

} );

export default instance;
