import React from 'react';
import Link from 'next/link';

const TodoItem: React.FC = () => {
  return (
    <li>
      <Link href='/todos/[id]' as={`/todos/1`}>
        Todo 1
      </Link>
      <button>
        <Link href='/todos/[id]/edit' as={`/todos/1/edit`}>
          Edit
        </Link>
      </button>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
