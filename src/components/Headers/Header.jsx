import React from "react";
import "../../styles/header.css";

const Header = ({ children, direction = "" }) => {
	return <header className={direction === "left" ? "left" : ""}>{children}</header>;
};

// const Header = ({ children, direction = "" }: { children: React.ReactNode; direction: string }) => {
// 	return <header className={direction === "left" ? "left" : ""}>{children}</header>;
// };

const HeaderIcon = ({ children }) => {
	return <>{children}</>;
};

const HeaderText = ({ children }) => {
	return <h1 className="text-gradient">{children}</h1>;
};

const HeaderSubtitle = ({ children }) => {
	return <h2 className="text-gradient">{children}</h2>;
};

Header.Text = HeaderText;
Header.Subtitle = HeaderSubtitle;
Header.Icon = HeaderIcon;
export default Header;
