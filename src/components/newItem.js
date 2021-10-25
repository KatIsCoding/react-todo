import React from 'react';
import PropTypes from 'prop-types';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    const { newTodoEventHandler } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        newTodoEventHandler(this.state);
      }}
      >
        <input onKeyUp={(e) => {
          if (e.key === 'Enter') {
            e.target.value = '';
          } else {
            this.setState({ title: e.target.value });
          }
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
