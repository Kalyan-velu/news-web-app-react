import React, {useState, useEffect} from 'react';
import { Grid} from "@mui/material";
import instance from "../../api/axios/axios";
import requests from "../../api/axios/Requests";

import '../trending/trending.css'
import Article from '../Article';
export default function Business () {

	const [articles, setArticles] = useState([])
	

	useEffect(()=>{
		async function getArticles(){
			try {
				await instance.get( requests.fetchBusiness )
				.then( (res) => {
				console.log(res );
				setArticles( res.data.articles)
				} )
			} catch (e) {
				console.log(e)
			}
		}
		getArticles()
		
	},[])
		
	return(
		<div className="trending">
			<div className="tab-header">
				<h2>Business Articles</h2>
			</div>
			<Grid  container margin={"auto"}>
				{articles?.map( (item,index) => (	
					<Article key={index} item={item}/>
					))}
			</Grid>
			</div>
		)
}