const NavLink = ({ href, name }) => {
	return (
		<a href={href} style={{ color: 'white' }}>
			{name}
		</a>
	);
};

export default NavLink;
