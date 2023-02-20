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
				<div>nice to meet you!</div>
			</Header.Text>
		</Header>
	);
};

export const About = () => {
	return (
		<Header.Section icon={<User />}>
			<span id="about">About Me</span>
		</Header.Section>
	);
};

export const Projects = () => {
	return (
		<Header.Section icon={<FolderNotchOpen />}>
			<span id="projects">Projects</span>
		</Header.Section>
	);
};

export const Contact = () => {
	return (
		<Header.Section icon={<Envelope />}>
			<span id="contact">Contact</span>
		</Header.Section>
	);
};

export const Toolkit = () => {
	return <Header.Section icon={<Wrench />}>Toolkit</Header.Section>;
};
