import React from "react";
import { Envelope, FolderNotchOpen, User, Hamburger, X } from "phosphor-react";
import "../styles/nav.css";

const Nav = () => {
	const [toggleMobileMenu, setToggleMobileMenu] = React.useState(false);
	const menuItems = (
		<>
			<li>
				<User weight="duotone" size={24} color="var(--secondary)" />
				<a href="">About Me</a>
			</li>
			<li>
				<FolderNotchOpen weight="duotone" size={24} color="var(--secondary)" />
				<a href="">Projects</a>
			</li>
			<li>
				<Envelope weight="duotone" size={24} color="var(--secondary)" />
				<a href="">Contact</a>
			</li>
			<li>
				<a href="">Socials</a>
			</li>
		</>
	);

	return (
		<nav data-aos="fade-down" data-aos-delay="100">
			<h2>Aline Emily.</h2>
			<button
				className="mobile-menu"
				onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
			>
				<Hamburger size={40} color="var(--secondary)" weight="duotone" />
			</button>
			<div className="overlay" style={{ width: toggleMobileMenu ? "100vw" : "0" }}>
				<ul className="overlay-content">
					<button
						className="mobile-menu"
						onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
					>
						<X size={40} color="var(--secondary)" weight="duotone" />
					</button>
					{menuItems}
				</ul>
			</div>
			<ul className="big-menu">{menuItems}</ul>
		</nav>
	);
};

export default Nav;
