import React from 'react';
import { NextPage } from 'next';

import TodoItem from '../../components/todos/todo-item';

const TodosPage: NextPage = () => {
  return (
    <div>
      <h3>List of todos</h3>
      <ul>
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodosPage;
