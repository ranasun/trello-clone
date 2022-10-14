import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import Card, { CardType } from './Card';
import './List.css';

export type ListType = {
	title: string;
	cards: CardType[];
};

const List: React.FC<ListType> = ({ title, cards }) => {
	const ref = useRef(null);
	useEffect(() => {
		if (!ref.current) return;
		new Sortable(ref.current, {
			group: 'shared',
			ghostClass: 'ghost',
			animation: 0,
		});
	});

	return (
		<div className="list">
			<div className="container">
				<div className="title removable editable">{title}</div>
				<div className="content" ref={ref}>
					{cards.map((content) => (
						<Card content={content} />
					))}
				</div>
				<div className="add-card editable">Add another card</div>
			</div>
		</div>
	);
};

export default List;
