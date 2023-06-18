import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.css";

const News = () => {
	// State to store the news articles
	const [articles, setArticles] = useState([]);

	// Function to fetch news data from the API
	const fetchNews = async () => {
		try {
			const response = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
			);
			setArticles(response.data.articles);
		} catch (error) {
			console.log(error);
		}
	};

	// Fetch news data on component mount
	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<div>
			<h1>News</h1>
			{/* Render the news articles */}
			{articles.map((article, index) => (
				<div key={index}>
					<a href={article.url} target="_blank" rel="noopener noreferrer">
						<h3>{article.title}</h3>
					</a>
					{article.urlToImage && (
						<img
							src={article.urlToImage}
							alt={article.title}
							style={{ width: 600, height: 400 }}
						/>
					)}
					<p>{article.description}</p>
					{index !== articles.length - 1 && <hr />}{" "}
					{/* Add a line if not the last article */}
				</div>
			))}
			<h1>News Page</h1>
		</div>
	);
};

export default News;
