import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./Navigation";

import News from "./News";
import Traffic from "./Traffic";
import Weather from "./Weather";

const App = () => {
	return (
		<Router>
			<div>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<News />} />
					<Route path="/traffic" element={<Traffic />} />
					<Route path="/weather" element={<Weather />} />
				</Routes>
			</div>
		</Router>
	);
};

const Home = () => {
	return <h1>Welcome to the Home Page!</h1>;
};

export default App;
