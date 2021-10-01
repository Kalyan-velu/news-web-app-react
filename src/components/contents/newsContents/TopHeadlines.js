import React, {Component} from 'react';
import Divider from "@mui/material/Divider";
import {Container, Grid} from "@mui/material";
import instance from "../../api/axios/axios";
import requests from "../../api/axios/Requests";
import Button from "@mui/material/Button";


console.log( process.env )

export default class News extends Component {

	constructor(category) {
		super( {category} );

		this.state = {
			articles: []
		}
		/*requesting the api*/
		instance.get( requests.fetchTopInHeadlines )
			.then( res => {
				console.log( res.data.articles );
				this.setState( {articles: res.data.articles} )
			} )

	}

	render() {
		return (
			<div>
				<h3>Trending Stories</h3>
				<Divider/>
				{/* eslint-disable-next-line react/jsx-key */}
				{this.state.articles.map( item => (
					<Container style={{paddingBottom: 8}} key={item.id}>
						<Grid>
							<Grid containerg>
								<div className="newsCard">
									<img
										alt={item.title}
										src={
											item.urlToImage

										}
										style={{width: 300}}
									/>

								</div>
								<div>
									<h1 style={{fontSize: 18}}>
										{item.title}
										<p style={{
											display: "flex",
											flexDirection: "flex-end",
											fontSize: 8
										}}>{item.publishedAt}</p>
									</h1>

									<p style={{
										display: "grid",
										justifyContents: "spaceAround",
										padding: 10,
										wordWarp: "lineBreak"
									}}>{item.content}</p>

									<Button href={item.url} value={"Visit Site"}/>
								</div>
								<button ref={item.url}/>

							</Grid>
							</Grid>
						</Container>
					))}

			</div>
		)
	}
}
