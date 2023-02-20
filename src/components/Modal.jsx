import { X } from "phosphor-react";
import React from "react";

const Modal = ({
	id,
	title,
	description,
	tech,
	image,
	github,
	live,
	toggleModal,
	closeModal
}) => {
	console.log(image);
	return (
		<section
			className="overlay blur"
			style={{ width: toggleModal ? "100vw" : "0" }}
			onClick={() => closeModal()}
		>
			<article
				className="overlay-content white-bg"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-gradient">
					{title}
					<button
						onClick={() => closeModal()}
						style={{ float: "right", display: "flex", padding: "4px" }}
					>
						<X size={20} color="var(--pure-white)" weight="bold" />
					</button>
				</h2>

				<div className="center">
					<div className="carousel">
						<div className="scroll">
							<div className="scroll-item-outer">
								{image.map((image, index) => (
									<div className="scroll-item" id={`#${index}`}>
										<img src={image} alt={title} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div id="navigate">
					{image.map((image, index) => (
						<a href={`#${index}`}>{index + 1}</a>
					))}
				</div>
				<p>{description}</p>

				<section className="buttons-section">
					<a href={github} target="_blank" rel="noopener noreferrer">
						Github
					</a>
					<a href={live} target="_blank" rel="noopener noreferrer">
						Live
					</a>
				</section>
			</article>
		</section>
	);
};

export default Modal;
