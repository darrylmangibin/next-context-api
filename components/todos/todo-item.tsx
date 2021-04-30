import React from 'react';
import Link from 'next/link';

import {Todo  } from '../../interface/todo';

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <Link href='/todos/[id]' as={`/todos/${todo.id}`}>
        {todo.title}
      </Link>
      <button>
        <Link href='/todos/[id]/edit' as={`/todos/${todo.id}/edit`}>
          Edit
        </Link>
      </button>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
