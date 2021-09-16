import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';

const ColorListItem = ({ color }) => {
  const history = useHistory();
  const { tags } = useParams();

  const onItemRemoved = (color) => {
    const filteredTags = tags
      .split(',')
      .filter((el) => el !== color)
      .join(',');

    history.replace(`${history.location.pathname.replace(tags, filteredTags)}`);
  };

  if (!color) return null;

  return (
    <li
      className="list-group-item list-group-item-action"
      onClick={() => onItemRemoved(color)}
    >
      {color}
    </li>
  );
};

ColorListItem.propTypes = {
  color: PropTypes.string,
};

export default ColorListItem;
