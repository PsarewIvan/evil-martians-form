import React from 'react';

import s from './Users.module.scss';

const SOME_USERS = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'John 2',
  },
  {
    id: 3,
    name: 'John 3',
  },
  {
    id: 4,
    name: 'John 4',
  },
  {
    id: 5,
    name: 'John 5',
  },
];

const Users = () => {
  return (
    <div>
      <h1 className={s.title}>All users</h1>
      <ol>
        {SOME_USERS.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Users;
