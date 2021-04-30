import React, { useState, useEffect } from 'react';

import { Todo } from '../../interface/todo';

interface TodoFormProps {
  onSubmit?: (todoData: Partial<Todo>) => Promise<void> | void;
  todo?: Partial<Todo>;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, todo }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ title, completed });
  };

  useEffect(() => {
    if (todo?.id) {
      setTitle(todo?.title);
      setCompleted(todo.completed);
    }
  }, [todo]);

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='completed'>Completed: </label>
        <input
          type='checkbox'
          name='completed'
          id='completed'
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
