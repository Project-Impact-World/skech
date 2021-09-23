import React from 'react';
import { Card } from '../components/index';

export default {
	component: Card,
	title: 'Components/Card',
};

export const Primary = () => (
	<Card title="hello World">
		Hello From World We Are New to Storybook
	</Card>
);
