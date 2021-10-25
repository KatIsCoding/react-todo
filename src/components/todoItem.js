import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { todo, changeEvent, deleteEvent } = props;
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          changeEvent(todo.id);
        }}
      />
      {' '}
      {todo.title}
      <button type="button" onClick={() => { deleteEvent(todo.id); }}>Delete</button>
    </li>
  );
}

Item.propTypes = {
  todo: PropTypes.objectOf,
  changeEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

Item.defaultProps = {
  todo: {},
};

export default Item;
