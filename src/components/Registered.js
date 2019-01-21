import React from 'react';

const Registered = ({ isRegistered }) => {
  return isRegistered 
    ? <div className="box-green"></div>
    : <div className="box-red"></div>
}

export default Registered;