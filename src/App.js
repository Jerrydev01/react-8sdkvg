import React, { useState } from 'react';
import './style.css';

import { data } from './Data';

export default function App() {
  // console.log(useState('hello'))
  const [title, setTitle] = useState(data);

  return (
    <>
      {title.map((person) => {
      return  <div key={person.id}>
         <h2>{person.name}</h2>
        </div>;
      })}
    </>
  );
}
