import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

export const NavItem = ({ color = 'white', children }) => {
	const Item = styled.li`
		margin: 0 5px 0 5px;
		list-style: none;
		color: ${color};
	`;

	return <Item>{children}</Item>;
};

export const NavMap = ({ children }) => {
	const NavMap = styled.ul`
		display: flex;
		background-color: ${(props) =>
			props.theme.color.accent};
		cursor: pointer;
		align-items: end;
		height: 100%;
		color: white;
		font-family: ${(props) => props.theme.fonts[1]};
		@media screen and (max-width: 600px) {
			visibility: collapse;
		}
	`;
	return (
		<ThemeProvider theme={theme}>
			<NavMap>{children}</NavMap>
		</ThemeProvider>
	);
};

export const NavMedia = () => {};

const NavBar = ({ color, children, flex }) => {
	const NavBar = styled.div`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		min-height: 70px;
		display: flex;
		flex-direction: ${flex};
		align-items: center;
		padding: 0px 100px 0px 100px;
		background-color: ${color};
		font-family: ${(props) => props.theme.fonts[1]};
		color: white;
		@media screen and (max-width: 600px) {
			bottom: 0;
			left: 0;
			right: 0;
			top: auto;
		}
	`;

	return (
		<ThemeProvider theme={theme}>
			<NavBar>{children}</NavBar>;
		</ThemeProvider>
	);
};

export default NavBar;
