import ColorListItem from './ColorListItem';
import { useParams } from 'react-router-dom';

const ColorList = () => {
  const { tags } = useParams();
  const colors = tags.split(',');

  return (
    <ul className="list-group">
      {colors.map((color, idx) => (
        <ColorListItem key={idx} color={color} />
      ))}
    </ul>
  );
};

export default ColorList;
