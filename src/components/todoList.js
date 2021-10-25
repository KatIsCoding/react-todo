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

class TodoList extends React.Component {
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

  checkTodo(id) {
    const { todos } = this.state;
    console.log(id, todos);
    this.setState({
      todos: todos.map((todo) => {
        const t = todo;
        if (todo.id === id) {
          t.completed = !todo.completed;
        }
        return t;
      }),
    });
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
          todos.map((todo) => (
            <Item key={todo.id} todo={todo} changeEvent={(id) => { this.checkTodo(id); }} />
          ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
