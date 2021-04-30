import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { TodoContext } from '../../context/TodoState';

import TodoItem from '../../components/todos/todo-item';

const TodosPage: NextPage = () => {
  const context = useContext(TodoContext);

  useEffect(() => {
    context.getTodos()
  }, [])

  return (
    <div>
      <h3>List of todos</h3>
      <ul>
        {context.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {context.loading && <p>Loading...</p>}
    </div>
  );
};

export default TodosPage;
