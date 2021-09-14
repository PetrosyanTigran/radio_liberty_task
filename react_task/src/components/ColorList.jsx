import ColorListItem from './ColorListItem';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../helpers';

const ColorList = () => {
  const { tags } = useParams();
  const colors = tags.split(',');

  return (
    <ul className="list-group">
      {colors.map((color) => (
        <ColorListItem key={color} color={capitalizeFirstLetter(color)} />
      ))}
    </ul>
  );
};

export default ColorList;
