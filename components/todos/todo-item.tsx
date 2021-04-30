import React from 'react';
import Link from 'next/link';

import { Todo } from '../../interface/todo';

interface TodoItemProps {
  todo: Todo;
  onDelete?: (id: string) => Promise<void> | void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
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
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
