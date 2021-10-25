import './style.css';
import React from 'react';
import Item from './todoItem';

function Header() {
  return (
    <div className="header">
      todo
    </div>
  );
}

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Lol',
          completed: false,
        },
      ],
    };
  }

  addNewTodo(todoTitle) {
    this.setState({ todos: [{ id: 2, title: todoTitle, completed: false }] });
    console.log(todoTitle, this.state);
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <div>
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              this.addNewTodo(e.target.value);
              e.target.value = '';
            }
          }}
          />
          <ul className="todoList">
            {
          todos.map((todo) => <Item />)
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
