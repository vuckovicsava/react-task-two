import React from 'react';

const Tags = ({ tags }) => (
  <ul>
    {tags.map(tag => <li key={tag}>{tag}</li>)}
  </ul>
);

export default Tags;