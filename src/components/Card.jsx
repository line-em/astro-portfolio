import React from "react";
import "../styles/card.css";
import Modal from "./Modal";
import { DotsThree } from "phosphor-react";

const Card = (props) => {
	const { id, title, description, tech, image, github, live } = props;
	const [toggleModal, setToggleModal] = React.useState(false);

	const closeModal = () => (toggleModal ? setToggleModal(!toggleModal) : null);

	return (
		<article className="card" data-aos={`fade-${id % 2 === 1 ? "down" : "up"}`}>
			<section className="img-section" onClick={() => setToggleModal(true)}>
				<img src={image[0]} alt={title} />
			</section>
			<section className="text-section">
				<h3 className="text-gradient">
					{title}
					<div className="info-icon" onClick={() => setToggleModal(true)}>
						<DotsThree color="var(--accent)" size={30} weight="duotone" />
					</div>
				</h3>
				<section className="pill-section">
					{tech.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</section>
				<section className="buttons-section">
					<button onClick={() => setToggleModal(true)}>Read More</button>
					<a href={github} target="_blank" rel="noopener noreferrer">
						Github
					</a>
					<a href={live} target="_blank" rel="noopener noreferrer">
						Live
					</a>
				</section>
			</section>
			{toggleModal && (
				<Modal {...props} closeModal={closeModal} toggleModal={toggleModal} />
			)}
		</article>
	);
};

export default Card;
