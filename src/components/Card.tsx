import './Card.css';

export type CardType = string;

interface Props {
	content: string;
}

const Card: React.FC<Props> = ({ content }) => {
	return <div className="card removable editable">{content}</div>;
};

export default Card;
