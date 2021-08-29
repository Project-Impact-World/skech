import React from 'react';

const List = ({ items }) => {
	let listItems;
	items === null || items === undefined
		? (listItems = [1, 2, 3, 4])
		: (listItems = items);
	return (
		<div
			style={{
				padding: '10px',
				backgroundColor: 'green',
			}}>
			<ul>
				{listItems.map((item, idx) => {
					return <li key={idx}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default List;
