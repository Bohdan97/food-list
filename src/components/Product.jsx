import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Product({ list, onDelete }) {
  return (
    <div className="list">
      <ul>
        <li>
          <img src={list.imageUrl} alt={list.name} height="200px" width="200px" />
          <h2>
            {list.name}, {list.count}
          </h2>
          <p>{list.description}</p>
          <Link to={`/${list.name}`}>
            <button className="btn btn-secondary">More</button>
          </Link>
        </li>
      </ul>
      <FaTimes
        style={{
          cursor: 'pointer',
          color: 'grey',
        }}
        onClick={() => onDelete(list.id)}
      />
    </div>
  );
}

export default Product;
