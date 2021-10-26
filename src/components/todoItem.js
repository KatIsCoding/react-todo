import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const [state, setstate] = useState({ editing: false });
  const viewmode = { display: 'flex' };
  const editMode = { display: 'none' };
  const {
    todo, checkEvent, deleteEvent, editEvent,
  } = props;
  if (state.editing) {
    viewmode.display = 'none';
    editMode.display = 'flex';
  } else {
    viewmode.display = 'flex';
    editMode.display = 'none';
  }
  return (
    <li key={todo.id}>
      <div
        style={viewmode}
        onDoubleClick={() => {
          setstate({ editing: !state.editing });
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            checkEvent(todo.id);
          }}
        />
        {' '}
        {todo.title}
        <button type="button" onClick={() => { deleteEvent(todo.id); }}>Delete</button>
      </div>
      <input
        type="text"
        placeholder={todo.title}
        style={editMode}
        onChange={(e) => {
          todo.title = e.target.value;
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            if (e.target.value) {
              setstate({ editing: !state.editing });
              editEvent(todo.id, e.target.value);
            } else {
              setstate({ editing: !state.editing });
            }
          }
        }}
      />
    </li>
  );
}

Item.propTypes = {
  todo: PropTypes.objectOf,
  checkEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  editEvent: PropTypes.func.isRequired,
};

Item.defaultProps = {
  todo: {},
};

export default Item;
