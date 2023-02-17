import React from "react";
import { User, HandWaving, Envelope, FolderNotchOpen, Wrench } from "phosphor-react";
import Header from "./Header";

export const Welcome = () => {
	return (
		<Header>
			<Header.Icon>
				<HandWaving weight="duotone" size={85} color="var(--primary)" />
			</Header.Icon>
			<Header.Text>
				<div className="bigger">Hey there,</div>
				<div data-aos="fade-left" data-aos-delay="400" data-aos-duration="600">
					nice to meet you!
				</div>
			</Header.Text>
		</Header>
	);
};

export const About = () => {
	return <Header.Section icon={<User />}>About Me</Header.Section>;
};

export const Projects = () => {
	return <Header.Section icon={<FolderNotchOpen />}>Projects</Header.Section>;
};

export const Contact = () => {
	return <Header.Section icon={<Envelope />}>Contact Me</Header.Section>;
};

export const Toolkit = () => {
	return <Header.Section icon={<Wrench />}>Toolkit</Header.Section>;
};
