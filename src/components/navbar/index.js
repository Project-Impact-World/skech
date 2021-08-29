import NavLink from './navlink';
import React from 'react';

const NavBar = ({ links }) => {
	let navlinks;
	!links
		? (navlinks = [
				{ href: '/home', name: 'Home' },
				{ href: '/about', name: 'About' },
				{ href: '/about', name: 'Blogs' },
				{ href: '/about', name: 'FAQs' },
		  ])
		: (navlinks = links);

	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'end',
				backgroundColor: '#039dfc',
				height: '100px',
				width: '100vw',
				position: 'absolute',
				top: '0px',
				right: '0px',
			}}>
			<div
				style={{
					height: '100%',
					width: `${navlinks.length * 10}vw`,
					display: 'flex',
					flexFlow: 'row wrap',
					alignItems: 'center',
					justifyContent: 'space-evenly',
				}}>
				{navlinks.map((link, idx) => {
					return (
						<div key={idx}>
							<NavLink href={link.href} name={link.name} />
						</div>
					);
				})}
			</div>
		</nav>
	);
};

export default NavBar;
