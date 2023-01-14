import React from "react";
import { HandWaving } from "phosphor-react";
import Header from "./Header";

const MainHeader = () => {
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

export default MainHeader;
