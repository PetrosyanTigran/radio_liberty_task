import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { capitalizeFirstLetter } from '../helpers';

const ColorListItem = ({ color }) => {
  const history = useHistory();

  const onItemRemoved = (color) => {
    history.replace(`${history.location.pathname.replace(color, '')}`);
  };

  return (
    <li
      className="list-group-item list-group-item-action"
      onClick={() => onItemRemoved(color)}
    >
      {capitalizeFirstLetter(color)}
    </li>
  );
};

ColorListItem.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorListItem;
