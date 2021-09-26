import React, {Component} from 'react';
import requests from "../../data/axios/Requests";
import instance from "../../data/axios/axios";
import Divider from "@mui/material/Divider";
import {Container, Grid} from "@mui/material";

console.log( process.env )

export default class News extends Component {

	constructor(props) {
		super( props );
		this.state = {
			articles: []
		}
		/*requesting the api*/
		instance.get( requests.fetchTopInHeadlines )
			.then( res => {
				console.log( res.data.articles );
				this.setState({articles: res.data.articles})
		} )

	}

	render() {
		return (
			<div>
				<ul>
					<h1>News</h1>
					<Divider/>
					{/* eslint-disable-next-line react/jsx-key */}
					{this.state.articles.map(item => (
						<Container style={{backgroundColor:"red"}} key={item.id}>
							<Grid >
								<Grid container style={{backgroundColor:"grey"}}>
									<h1 style={{fontSize:18,backgroundColor:"green"}}>
										<a href={item.url}>
											{item.title}
										</a>
										<p style={{fontSize:15}}>{item.publishedAt}</p>
										<p style={{display:"grid",justifyContents:"spaceAround",padding: 10,wordWarp:"lineBreak"}}>{item.content}</p>
									</h1>

								</Grid>
							</Grid>
						</Container>
					))}

				</ul>
			</div>
		)
	}
}
