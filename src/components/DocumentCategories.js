import React from 'react';
import { Link } from 'react-router-dom';

const DocumentCategories = ({ categories }) => (
  <div className="columns is-multiline">
    {categories.map(category => {
      const cat = category.category;
      return (
        <div>
          <div className="hero">
            <h3 className="title">{cat.categoryName}</h3>
          {cat.files.map(file => <Link to={file.file}>{file.name}</Link>)}
          </div>
          <hr>
        </div>
      );
    })}
  </div>
);
export default DocumentCategories;
