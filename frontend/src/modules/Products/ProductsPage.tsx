import React from 'react';
import ProductsTable from './ProductsTable';

const ProductsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;