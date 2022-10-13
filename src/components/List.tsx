import Card, { CardType } from './Card';
import './List.css';

export type ListType = {
	title: string;
	cards: CardType[];
};

const List: React.FC<ListType> = ({ title, cards }) => {
	return (
		<div className="list">
			<div className="title removable editable">{title}</div>
			<div className="content">
				{cards.map((content) => (
					<Card content={content} />
				))}
			</div>
			<div className="add-card editable">Add another card</div>
		</div>
	);
};

export default List;
