import React from 'react';

const TodoForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' id='title' />
      </div>
      <div>
        <label htmlFor='completed'>Completed: </label>
        <input type='checkbox' name='completed' id='completed' />
      </div>
    </form>
  );
};

export default TodoForm;
