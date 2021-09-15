import ColorListItem from './ColorListItem';
import { useParams } from 'react-router-dom';
import { generateRandomKey } from '../helpers';

const ColorList = () => {
  const { tags } = useParams();
  const colors = tags.split(',');

  return (
    <ul className="list-group">
      {colors.map((color) => (
        <ColorListItem key={generateRandomKey()} color={color} />
      ))}
    </ul>
  );
};

export default ColorList;
