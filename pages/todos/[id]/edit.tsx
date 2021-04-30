import React from 'react';
import { NextPage } from 'next';

import TodoForm from '../../../components/todos/todo-form';

const EditTodoPage: NextPage = () => {
  return (
    <div>
      <h3>Edit</h3>
      <TodoForm />
    </div>
  );
};

export default EditTodoPage;
