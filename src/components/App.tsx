import { useEffect, useRef, useState } from 'react';
import Sortable from 'sortablejs';
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
	const ref = useRef(null);

	useEffect(() => {
		if (!ref.current) return;
		new Sortable(ref.current, {
			animation: 50,
			ghostClass: 'ghost-list',
			handle: '.title',
		});
	});

	return (
		<main>
			<div id="main" ref={ref}>
				{list.map(({ title, cards }) => (
					<List title={title} cards={cards}></List>
				))}
			</div>
			<AddList />
		</main>
	);
};

export default App;
