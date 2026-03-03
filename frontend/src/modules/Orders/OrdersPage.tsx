import React from 'react';
import OrdersTable from './OrdersTable';

const OrdersPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <OrdersTable />
    </div>
  );
};

export default OrdersPage;