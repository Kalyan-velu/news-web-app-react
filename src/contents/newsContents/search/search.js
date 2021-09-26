import React, {useEffect, useState} from 'react';
import instance from "../../../data/axios/axios";
import requests from "../../../data/axios/Requests";
import {Box, Container, Grid, IconButton, InputBase, Paper} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

	function Search() {

		const [ news, setNews ] = useState( {articles: []} );


		useEffect( async () => {
			function fetchData() {
				instance.get( requests.fetchTopHeadlines )
					.then( res => {
						setNews( {articles: res.data.articles} );
						console.log( res.data.articles )
					} )
			}

			fetchData();
			console.log( fetchData )
		}, [] );
	return(
		<div>

		</div>
	)
	}
	export default Search;

