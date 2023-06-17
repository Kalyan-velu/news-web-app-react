import React, {useState, useEffect} from 'react';
import { fetchCategory } from "../../api/axios/Requests";
import '../trending/trending.scss'
import { useParams } from 'react-router-dom';
export default function Category () {

	const [articles, setArticles] = useState([])
	const {id}=useParams()

	useEffect(()=>{
		async function getArticles(){
			try {
				await fetchCategory({categories:id})
				.then( (res) => {
				console.log(res );
				setArticles( res.data)
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

			</div>
		)
}