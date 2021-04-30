import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const TodoDetailsPage: NextPage = () => {
  return (
    <div>
      <h3>Todo 1</h3>
      <p>Completed: Yes</p>
      <button>
        <Link href='/todos'>Go back</Link>
      </button>
    </div>
  );
};

export default TodoDetailsPage;
