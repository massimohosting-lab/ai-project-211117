import React from 'react';
import { Order } from '../../types';

const orders: Order[] = [
  { id: 1, productId: 1, userId: 1, quantity: 2, total: 1999.98 },
  { id: 2, productId: 2, userId: 2, quantity: 1, total: 499.99 },
];

const OrdersTable: React.FC = () => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Order ID</th>
          <th className="py-2">Product ID</th>
          <th className="py-2">User ID</th>
          <th className="py-2">Quantity</th>
          <th className="py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id} className="text-center">
            <td className="py-2">{order.id}</td>
            <td className="py-2">{order.productId}</td>
            <td className="py-2">{order.userId}</td>
            <td className="py-2">{order.quantity}</td>
            <td className="py-2">{order.total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;