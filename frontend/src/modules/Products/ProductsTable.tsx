import React from 'react';
import { Product } from '../../types';

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Smartphone', price: 499.99 },
];

const ProductsTable: React.FC = () => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
          <th className="py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id} className="text-center">
            <td className="py-2">{product.id}</td>
            <td className="py-2">{product.name}</td>
            <td className="py-2">{product.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;