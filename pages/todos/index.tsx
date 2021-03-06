import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { TodoContext } from '../../context/TodoState';

import TodoItem from '../../components/todos/todo-item';

import { GetTodosActionTypes } from '../../context/types';

const TodosPage: NextPage = () => {
  const context = useContext(TodoContext);

  const onDelete = (id: string) => {
    context.deleteTodo(id);
  };

  useEffect(() => {
    context.getTodos();

    return () => {
      context.dispatch({ type: GetTodosActionTypes.GET_TODOS_RESET });
    };
  }, []);

  return (
    <div>
      <h3>List of todos</h3>
      <ul>
        {context.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
      {context.loading && <p>Loading...</p>}
    </div>
  );
};

export default TodosPage;
