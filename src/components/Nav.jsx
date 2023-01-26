import React from "react";
import { Envelope, FolderNotchOpen, User, Hamburger } from "phosphor-react";
import "../styles/nav.css";

const Nav = () => {
	return (
		<>
			<nav>
				<h2>Aline Emily.</h2>
				<ul className="mobile-menu">
					<li>
						<Hamburger size={24} color="var(--secondary)" weight="duotone" />
					</li>
				</ul>
				<ul className="big-menu">
					<li>
						<User weight="duotone" size={24} color="var(--secondary)" />
						<a href="">About Me</a>
					</li>
					<li>
						<FolderNotchOpen
							weight="duotone"
							size={24}
							color="var(--secondary)"
						/>
						<a href="">Projects</a>
					</li>
					<li>
						<Envelope weight="duotone" size={24} color="var(--secondary)" />
						<a href="">Contact</a>
					</li>
					<li>
						<a href="">Socials</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
