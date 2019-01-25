import React from 'react';
import FullName from './FullName';
import Image from './Image';
import About from './About';
import Email from './Email';
import Phone from './Phone';
import Tags from './Tags';
import Registered from './Registered';

const User = ({ 
  name,
  about,
  picture,
  isRegistered,
  email,
  phone,
  tags
}) => (
  <div className="card">
    <div className="card__header">
      <Image picture={picture} />
      <FullName name={name} />
      <Registered isRegistered={isRegistered}/>
    </div>
    <About about={about} />
    <div className="card__contact-details">
      <Email email={email} />
      <Phone phone={phone} />
    </div>
    <Tags tags={tags} />
  </div>
);

export default User;