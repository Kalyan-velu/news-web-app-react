import React, {useEffect, useState} from 'react';
import instance from "../../../api/axios/axios";
import requests from "../../../api/axios/Requests";
import {Container, Grid, IconButton, TextField} from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Search} from "@mui/icons-material";


function SearchResults() {
	const [ article, setArticle ] = useState( {articles: []} );
	let [ search, setSearch ] = useState( '' );
	const [ getSearch, setGetSearch ] = useState( '' );


	console.log( search );


	function handleChange(e) {
		setSearch( e.target.value )
	}

	function getSearchResult(e) {
		e.preventDefault();
		setGetSearch( search );
	}

	useEffect( async () => {
		function fetchData() {
			instance.get( requests.fetchSearch + `${search}` )
				.then( res => {
					setArticle( {articles: res.data.articles} );
					console.log( res.data )

				} )
		}

		fetchData();
		console.log( fetchData )
	}, [ getSearch ] );


	return (
		<div>
			<section style={{textAlign: "center"}}>
				<TextField
					className="user"
					variant='outlined'
					type='search'
					required
					size="small"
					onChange={handleChange}
				/>
				<IconButton
					onClick={getSearchResult}
					type="submit"

					aria-label="search"
				>
					<Search/>
				</IconButton></section>
			<ul>
				<h4>Results for {search}</h4>
				<Divider/>
				{/* eslint-disable-next-line react/jsx-key */}
				{article.articles.map( item => (
					<Container style={{paddingBottom: 8}} key={item.id}>
						<Grid container>
							<h1 style={{fontSize: 18}}>
								{item.title}
								<p style={{fontSize: 15}}>{item.publishedAt}</p>
								<p style={{
									display: "grid",
									justifyContents: "spaceAround",
									padding: 10,
									wordWarp: "lineBreak"
								}}>{item.content}</p>
								<Button href={item.url}>Visit Site</Button>
							</h1>
						</Grid>
					</Container>
				) )}
			</ul>

		</div>
	)
}

export default SearchResults;

