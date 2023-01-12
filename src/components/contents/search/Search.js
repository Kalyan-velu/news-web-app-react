import React, {useEffect, useState} from 'react';
import instance from "../../api/axios/axios";
import requests from "../../api/axios/Requests";
import {Container, Grid, IconButton, TextField} from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Search as SearchIcon} from "@mui/icons-material";


function Search() {
	const [ article, setArticle ] = useState( []);
	let [ search, setSearch ] = useState( '' );
	let [ searchF, setSearchF ] = useState( '' );
	const [ getSearch, setGetSearch ] = useState( '' );
   
	function handleChange(e) {
		setSearch( e.target.value )
	}

	function getSearchResult(e) {
		e.preventDefault();
		setGetSearch( search );
	}

	useEffect(  () => {
		function fetchData() {
			//destructring
			instance.get( requests.fetchSearch + `${search}` )
				.then( (res) => {
					setArticle( res.data.articles );
					console.log( res.data )
					setSearchF(search)
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
					<SearchIcon/>
				</IconButton></section>
			<ul>
				<h4>Results for {searchF}</h4>
				<Divider/>
				{/* eslint-disable-next-line react/jsx-key */}
				{article.map( item => (
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

export default Search;

