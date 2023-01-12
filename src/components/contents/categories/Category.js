import React, {useState, useEffect} from 'react';
import { Grid} from "@mui/material";
import instance from "../../api/axios/axios";
import requests from "../../api/axios/Requests";

import '../trending/trending.css'
import Article from '../Article';
import { useParams } from 'react-router-dom';
export default function Category () {

	const [articles, setArticles] = useState([])
	const {id}=useParams()

	useEffect(()=>{
		async function getArticles(){
			try {
				await instance.get( `/top-headlines?country=in&category=${id}`)
				.then( (res) => {
				console.log(res );
				setArticles( res.data.articles)
				} )
			} catch (e) {
				console.log(e)
			}
		}
		getArticles()
		
	},[id])
		
	return(
		<div className="trending">
			<div className="tab-header">
				<h2>{id.toUpperCase()} Articles</h2>
			</div>
			<Grid  container margin={"auto"}>
				{articles?.map( (item,index) => (	
					<Article key={index} item={item}/>
					))}
			</Grid>
			</div>
		)
}