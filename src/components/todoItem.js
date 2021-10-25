import React from 'react';
import PropTypes from 'prop-types';

function Item({ completed, changeEvent, title }) {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={changeEvent()} />
      {' '}
      {title}
    </li>
  );
}

Item.propTypes = {
  completed: PropTypes.bool.isRequired,
  changeEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
