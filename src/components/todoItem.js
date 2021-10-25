import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { todo, changeEvent } = props;
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          changeEvent(todo.id);
          todo.completed = !todo.completed;
        }}
      />
      {' '}
      {todo.title}
    </li>
  );
}

Item.propTypes = {
  todo: PropTypes.objectOf,
  changeEvent: PropTypes.func.isRequired,
};

Item.defaultProps = {
  todo: {},
};

export default Item;
