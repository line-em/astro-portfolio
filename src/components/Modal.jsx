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
	const [currentImage, setCurrentImage] = React.useState(0);
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

				<section className="modal-content">
					<div className="modal-project-assets">
						{image.length > 1 && (
							<div className="navigate">
								{image.map((image, index) => (
									<button
										onClick={() => setCurrentImage(index)}
										disabled={index === currentImage}
									>
										{index + 1}
									</button>
								))}
							</div>
						)}
						<div className="carousel">
							<div className="img-carousel">
								<img src={image[currentImage]} alt={title} />
							</div>
						</div>
					</div>
					<section className="project-info dotted-line-section">
						<article className="info">
							<div className="project-header">
								<h3 className="text-gradient">About the Project</h3>
								<section className="project-links" aria-hidden>
									<a
										href={github}
										target="_blank"
										rel="noopener noreferrer"
									>
										Github
									</a>
									<a
										href={live}
										target="_blank"
										rel="noopener noreferrer"
									>
										Live
									</a>
								</section>
							</div>
							<p>{description}</p>
							<section className="pill-section">
								{tech.map((item, index) => (
									<div key={index}>{item}</div>
								))}
							</section>
						</article>
					</section>
				</section>
			</article>
		</section>
	);
};

export default Modal;
