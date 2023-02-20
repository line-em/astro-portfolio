import React from "react";
import { IconContext } from "phosphor-react";
import "../../styles/header.css";

const Header = ({ children, direction = "" }) => {
	return <header className={direction === "left" ? "left" : ""}>{children}</header>;
};

const HeaderIcon = ({ children }) => {
	return <>{children}</>;
};

const HeaderText = ({ children }) => {
	return <h1 className="text-gradient">{children}</h1>;
};

const HeaderSubtitle = ({ children }) => {
	return <h2 className="text-gradient">{children}</h2>;
};

const HeaderSection = ({ icon, children }) => {
	return (
		<IconContext.Provider
			value={{
				color: "var(--tertiary)",
				size: 50,
				weight: "duotone"
			}}
		>
			<div>
				<Header direction="left">
					<Header.Icon>{icon}</Header.Icon>
					<Header.Subtitle>{children}</Header.Subtitle>
				</Header>
			</div>
		</IconContext.Provider>
	);
};

Header.Text = HeaderText;
Header.Subtitle = HeaderSubtitle;
Header.Icon = HeaderIcon;
Header.Section = HeaderSection;
export default Header;
