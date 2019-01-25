import React from 'react';

const Tags = ({ tags }) => (
  <ul className="card__tag-list">
    {tags.map(tag => <li className="card__tag" key={tag}>{tag}</li>)}
  </ul>
);

export default Tags;