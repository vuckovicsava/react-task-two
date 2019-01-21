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
  <div className="user-card">
    <FullName name={name} />
    <Image picture={picture} />
    <About about={about} />
    <Email email={email} />
    <Phone phone={phone} />
    <Tags tags={tags} />
    <Registered isRegistered={isRegistered}/>
  </div>
);

export default User;