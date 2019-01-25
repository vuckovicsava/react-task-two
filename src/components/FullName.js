import React from 'react';

const FullName = ({ name }) => <h3 className="card__heading">{name.first} {name.last}</h3>;

export default FullName;