import './style.css';
import React from 'react';
import Item from './todoItem';
import NewTodoForm from './newItem';

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
      todos: [],
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addNewTodo(todoState) {
    const newTodo = {
      id: Date.now(),
      title: todoState.title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  editTodo(id, newTitle) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, title: newTitle,
          };
        }
        return todo;
      }),
    }));
  }

  checkTodo(id) {
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
  }

  deleteTodo(id) {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="ContentContainer">
        <Header />
        <div className="TodoListContainer">
          <NewTodoForm newTodoEventHandler={this.addNewTodo} />
          <ul className="todoList">
            {
          todos.map((todo) => (
            <Item
              key={todo.id}
              todo={todo}
              checkEvent={(id) => { this.checkTodo(id); }}
              deleteEvent={(id) => { this.deleteTodo(id); }}
              editEvent={() => { this.editTodo(); }}
            />
          ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
