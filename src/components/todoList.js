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
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addNewTodo(todoTitle) {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  checkTodo(id) {
    // const { todos } = this.state;
    // console.log(todos);
    // console.log(id, todos);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
    console.log(this.state);
  }

  deleteTodo(id) {
    console.log(id, this);
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
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
            <Item
              key={todo.id}
              todo={todo}
              changeEvent={(id) => { this.checkTodo(id); }}
              deleteEvent={(id) => { this.deleteTodo(id); }}
            />
          ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
