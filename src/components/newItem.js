import React from 'react';
import PropTypes from 'prop-types';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    const { newTodoEventHandler } = this.props;
    const { title } = this.state;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if (title.trim()) {
          e.target[0].value = '';
          newTodoEventHandler(this.state);
          this.setState({ title: '' });
        }
      }}
      >
        <input onKeyUp={(e) => {
          this.setState({ title: e.target.value });
        }}
        />
        <button type="submit">Submit</button>
      </form>

    );
  }
}

NewTodoForm.propTypes = {
  newTodoEventHandler: PropTypes.func.isRequired,
};

export default NewTodoForm;
