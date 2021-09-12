import ColorListItem from './ColorListItem';
import PropTypes from 'prop-types';

const ColorList = ({ colors }) => {
  return (
    <ul className="list-group">
      {colors.map((color) => (
        <ColorListItem key={color} color={color} />
      ))}
    </ul>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array.isRequired,
};

export default ColorList;
