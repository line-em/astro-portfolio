import React from "react";
import { User } from "phosphor-react";
import Header from "./Header";

const AboutHeader = () => {
	return (
		<Header direction="left">
			<Header.Icon>
				<User weight="duotone" size={50} color="var(--tertiary)" />
			</Header.Icon>
			<Header.Subtitle>About Me</Header.Subtitle>
		</Header>
	);
};

export default AboutHeader;
