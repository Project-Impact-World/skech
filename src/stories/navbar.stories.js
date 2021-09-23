import React from 'react';
import styled from 'styled-components';
import {
	Navbar,
	NavMap,
	NavItem,
} from '../components/index';

const testLinks = [
	{ name: 'link1', href: '/link1' },
	{ name: 'link2', href: '/link2' },
	{ name: 'link3', href: '/link3' },
];

const Link = styled.a`
	text-decoration: none;
	color: white;
`;
const testNav = (
	<NavMap>
		{testLinks.map((link) => (
			<NavItem>
				<Link href={link.href}>{link.name}</Link>
			</NavItem>
		))}
	</NavMap>
);

export default {
	component: Navbar,
	title: 'Components/Navbar',
	argTypes: {
		backgroundColor: { control: 'color' },
		options: ['Item One', 'Item Two', 'Item Three'],
		control: { type: 'select' }, // Automatically inferred when 'options' is defined
	},
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: '#00bbff',
	children: testNav,
	flex: 'row',
};
