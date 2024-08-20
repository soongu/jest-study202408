import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MyComponent = () => {
  const { data } = useContext(MyContext);
  return <div>{data}</div>;
};

export default MyComponent;
