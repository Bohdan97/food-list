import React from 'react';
import Product from './Product';

function Products({ products, onDelete }) {
  return (
    <>
      {products.map((list) => (
        <Product onDelete={onDelete} key={list.id} list={list} />
      ))}
    </>
  );
}

export default Products;
