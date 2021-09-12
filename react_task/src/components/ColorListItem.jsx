import PropTypes from 'prop-types';

const ColorListItem = ({ color }) => {
  return <li className="list-group-item list-group-item-action">{color}</li>;
};

ColorListItem.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorListItem;