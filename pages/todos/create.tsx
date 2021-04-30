import React from 'react';
import { NextPage } from 'next';

import TodoForm from '../../components/todos/todo-form';

const CreateTodoPage: NextPage = () => {
  return (
    <div>
      <h3>Create</h3>
      <TodoForm />
    </div>
  )
}

export default CreateTodoPage