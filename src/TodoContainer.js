import './App.css';
import React from 'react';
import TodoList from './components/todoList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Test',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <TodoList todos={todos} />
    );
  }
}

export default TodoContainer;
