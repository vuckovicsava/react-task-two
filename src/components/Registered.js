import React from 'react';

const Registered = ({ isRegistered }) => {
  return isRegistered 
    ? <span className="card__status card__status--green">Registered</span>
    : <div className="card__status card__status--red">Not Registered</div>
}

export default Registered;