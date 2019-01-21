import React from 'react';
import FullName from './FullName';
import Image from './Image';
import About from './About';
import Email from './Email';
import Phone from './Phone';
import Tags from './Tags';
import Registered from './Registered';

const User = () => (
  <div className="user-card">
    <FullName/>
    <Image/>
    <About/>
    <Email/>
    <Phone/>
    <Tags/>
    <Registered/>
  </div>
);

export default User;