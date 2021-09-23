import react from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 200px;
	width: 300px;
	border-radius: 5px;
	background-color: #fafafa;
`;

export const Card = ({ title, children }) => {
	return (
		<Wrapper>
			<header>
				<h1>{title}</h1>
			</header>
			<p>{children}</p>
		</Wrapper>
	);
};

export default Card;
