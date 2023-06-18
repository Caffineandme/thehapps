import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<nav>
			<ul className={isMobile ? "mobile-menu" : ""}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
				<li>
					<Link to="/traffic">Traffic</Link>
				</li>
				<li>
					<Link to="/weather">Weather</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
