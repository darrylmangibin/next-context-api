import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { TodoContext } from '../../../context/TodoState';

import TodoForm from '../../../components/todos/todo-form';
import { Todo } from '../../../interface/todo';
import { UpdateTodoActionTypes } from '../../../context/types';

const EditTodoPage: NextPage = () => {
  const context = useContext(TodoContext);
  const router = useRouter();

  const onSubmit = (todoData: Partial<Todo>) => {
    context.updateTodo(router.query.id as string, todoData);
  };

  useEffect(() => {
    if (router.query.id && !context.success) {
      context.getTodo(router.query.id as string);
    }

    if (context.success) {
      router.push('/todos');
    }

    return () => {
      context.dispatch({ type: UpdateTodoActionTypes.UPDATE_TODO_RESET });
    };
  }, [router.query.id, context.success]);

  return (
    <div>
      <h3>Edit</h3>
      <TodoForm todo={context.todo} onSubmit={onSubmit} />
    </div>
  );
};

export default EditTodoPage;
