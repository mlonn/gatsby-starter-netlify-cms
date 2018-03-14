import React from 'react';
import { Link } from 'react-router-dom';

const BoardMembers = ({ boardMembers }) => (
  <div className="columns is-multiline">
    {boardMembers.map(boardMember => {
      return (
        <div className="column is-4" key={boardMember.name}>
          <section className="section">
            <h4 className="title is-4">{boardMember.name}</h4>
            <h4 className="subtitle is-4">{boardMember.post}</h4>
            <a href={`mailto:${boardMember.email}`} data-rel="external">
              {boardMember.email}
            </a>
          </section>
        </div>
      );
    })}
  </div>
);
export default BoardMembers;
