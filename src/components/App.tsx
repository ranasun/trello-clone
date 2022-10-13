import { useState } from 'react';
import List, { ListType } from './List';
import AddList from './AddList';
import './App.css';

const state: ListType[] = [
	{
		title: 'This is a list',
		cards: ['This is a card', 'This is another card'],
	},
	{ title: 'This is another list', cards: ['Hello World!'] },
	{ title: 'This is an empty list', cards: [] },
];

const App = () => {
	const [list, setList] = useState(state);

	return (
		<main>
			{list.map(({ title, cards }) => (
				<List title={title} cards={cards}></List>
			))}
			<AddList />
		</main>
	);
};

export default App;
