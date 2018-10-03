import React from "react";
import { Link } from "react-router-dom";

const DocumentCategories = ({ categories }) => (
  <div className="hero">
    {categories.map(category => {
      const cat = category.category;
      return (
        <div>
          <h3 className="title">{cat.categoryName}</h3>
          <ul>
            {cat.files.map(file => (
              <li>
                <Link to={file.file}>{file.name}</Link>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      );
    })}
  </div>
);
export default DocumentCategories;
