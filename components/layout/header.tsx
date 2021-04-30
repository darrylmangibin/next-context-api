import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>
          <Link href="/todos/create">Create</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;