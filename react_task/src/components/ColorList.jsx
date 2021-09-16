import ColorListItem from './ColorListItem';
import { useParams } from 'react-router-dom';

const ColorList = () => {
  const { tags } = useParams();
  const colors = tags.split(',');

  return (
    <ul className="list-group">
      {colors.map((color, idx) => (
        //Usually some id goes for the key, but in my case index is the best solution
        <ColorListItem key={idx} color={color} />
      ))}
    </ul>
  );
};

export default ColorList;
