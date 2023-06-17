import React, {useEffect, useState} from 'react';
import {Container, Grid, IconButton, TextField} from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {Search as SearchIcon} from "@mui/icons-material";
import {fetchSearch} from '../../api/axios/Requests';


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
		setGetSearch(search);
	}

	useEffect(  () => {
		async function fetchData() {
			//destructring
			await fetchSearch({search:getSearch})
				.then( (res) => {
					setArticle( res.data );
					console.log( res.data )
				} )
		}
		fetchData();
		console.log( fetchData )
	}, [getSearch] );
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
				</IconButton>
			</section>
			<ul>
				<h4>Results for {getSearch}</h4>
				<Divider/>
				{article.length===0?<h1>Search for something</h1>:null}
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