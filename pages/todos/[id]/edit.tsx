import { NextPage } from 'next';
import React from 'react';

import TodoForm from '../../../components/todos/todo-form';

const EditTodoPage: NextPage = () => {
  return (
    <div>
      <h3>Edit</h3>
      <TodoForm />
    </div>
  );
};

export default EditTodoPage
