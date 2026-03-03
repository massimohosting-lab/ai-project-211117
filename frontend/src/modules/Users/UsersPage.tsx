import React from 'react';
import UsersTable from './UsersTable';

const UsersPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UsersTable />
    </div>
  );
};

export default UsersPage;