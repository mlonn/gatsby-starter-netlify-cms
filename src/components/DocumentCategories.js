import React from 'react';
import { Link } from 'react-router-dom';

const DocumentCategories = ({ categories }) => (
  <div className="columns is-multiline">
    {categories.map(category => {
      const cat = category.category;
      return (
        <div className="column is-12" key={cat.categoryName}>
          <h3 className="title">{cat.categoryName}</h3>
          {cat.files.map(file => <Link to={file.file}>{file.name}</Link>)}
        </div>
      );
    })}
  </div>
);
export default DocumentCategories;
