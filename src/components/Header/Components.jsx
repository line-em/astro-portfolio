import React from "react";
import { User, HandWaving } from "phosphor-react";
import Header from "./Header";

export const Welcome = () => {
	return (
		<Header>
			<Header.Icon>
				<HandWaving weight="duotone" size={85} color="var(--primary)" />
			</Header.Icon>
			<Header.Text>
				<div className="bigger">Hey there,</div> nice to meet you!
			</Header.Text>
		</Header>
	);
};

export const About = () => {
	return <Header.Section icon={<User />}>About Me</Header.Section>;
};

export const Projects = () => {
	return <Header.Section icon={<User />}>Projects</Header.Section>;
};

export const Contact = () => {
	return <Header.Section icon={<User />}>Contact Me</Header.Section>;
};

export const Toolkit = () => {
	return <Header.Section icon={<User />}>Toolkit</Header.Section>;
};
