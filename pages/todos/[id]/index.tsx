import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { TodoContext } from '../../../context/TodoState';
import { GetTodoActionTypes } from '../../../context/types';

const TodoDetailsPage: NextPage = () => {
  const context = useContext(TodoContext);

  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      context.getTodo(router.query.id as string);
    }

    return () => {
      context.dispatch({ type: GetTodoActionTypes.GET_TODO_RESET });
    };
  }, [router.query.id]);

  return (
    <div>
      <h3>{context.todo.title}</h3>
      <p>Completed: {context.todo.completed ? 'Yes' : 'No'}</p>
      <button>
        <Link href='/todos'>Go back</Link>
      </button>
    </div>
  );
};

export default TodoDetailsPage;
