import React, {useState, useEffect} from 'react';
import { Grid} from "@mui/material";
import {fetchTopCHeadlines, fetchTopHeadlines} from "../../api/axios/Requests";
import './trending.css'
import Article from '../Article';
import BasicSelect from '../SelectCategory';

export default function Trending () {
	const [articles, setArticles] = useState([])
	const [countryName, setCountryName] = React.useState('');
	console.log(countryName)
	useEffect(()=>{
		async function getArticles(){
			try {
				if(countryName){
					await fetchTopCHeadlines(countryName)
					.then( (res) => {
						console.log(res );
						setArticles( res.data)
						} )
				}else{
					await fetchTopHeadlines()
					.then( (res) => {
						console.log(res );
						setArticles( res.data)
						} )
				}	
			} catch (e) {
				console.log(e)
			}
		}
		getArticles()		
	},[countryName])
	

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };
	return(
		<div className="trending">
			<div className="tab-header">
				<h2>Trending Articles</h2>
				<BasicSelect handleChange={handleChange} countryName={countryName}/>
			</div>
			<Grid  container margin={"auto"}>
				{articles?.map( (item,index) => (	
					<Article key={index} item={item}/>
					))}
			</Grid>
			</div>
		)
}