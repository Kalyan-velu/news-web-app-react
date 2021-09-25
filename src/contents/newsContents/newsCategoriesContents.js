import React, {Component} from 'react';
import requests from "../../data/axios/Requests";
import instance from "../../data/axios/axios";
import Divider from "@mui/material/Divider";

console.log( process.env.REACT_APP_GOOGLE_API_KEY )
export default class News extends Component {

	constructor(props) {
		super( props );
		this.state = {
			articles: []
		}
		instance.get( requests.fetchTopHeadlines ).then( res => {
			console.log( res.data.articles )
		} )
	}

	render() {
		return (
			<div>
				<ul>
					<h1>News</h1>
					<Divider/>
				</ul>
			</div>
		)
	}
}
