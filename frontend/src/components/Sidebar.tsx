import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-6">ERP System</div>
      <nav className="mt-10">
        <NavLink to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Dashboard</NavLink>
        <NavLink to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Users</NavLink>
        <NavLink to="/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Products</NavLink>
        <NavLink to="/orders" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Orders</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;