import React from "react";
import "../styles/card.css";

const Card = ({ id, title, description, tech, image, github, live }) => {
	return (
		<article key={id} className="link-card">
			{/* <img src={image[0]} alt={title} /> */}
			<h3>{title}</h3>
			{/* {tech.map((item) => item + ",")} */}
			<a href="texte">Read More</a>
			<button>Github</button>
			<button>Live</button>
		</article>
	);
};

export default Card;
