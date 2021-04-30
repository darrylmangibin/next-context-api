import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import TodoForm from '../../components/todos/todo-form';
import { Todo } from '../../interface/todo';
import { TodoContext } from '../../context/TodoState';
import { CreateTodoActionTypes } from '../../context/types';

const CreateTodoPage: NextPage = () => {
  const context = useContext(TodoContext);
  const router = useRouter();

  const onSubmit = (todoData: Partial<Todo>) => {
    context.createTodo(todoData);
  };

  useEffect(() => {
    if (context.success) {
      setTimeout(() => {
        router.push('/todos');
      }, 300);
    }

    return () => {
      context.dispatch({ type: CreateTodoActionTypes.CREATE_TODO_RESET });
    };
  }, [context.success]);

  return (
    <div>
      <h3>Create</h3>
      <TodoForm onSubmit={onSubmit} />
      {context.loading && <p>Loading...</p>}
    </div>
  );
};

export default CreateTodoPage;
