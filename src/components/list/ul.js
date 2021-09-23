import styled from 'styled-components';

const List = ({ items }) => {
	let listItems;
	items === null || items === undefined
		? (listItems = [1, 2, 3, 4])
		: (listItems = items);
	return (
		<div>
			<ul>
				{listItems.map((item, idx) => {
					return <li key={idx}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default List;
