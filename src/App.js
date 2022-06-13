import React, { useState } from 'react';
import './style.css';

import Modal from './Modal';
import { data } from './Data';

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  const handleDelete = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <h1>prop drilling</h1>
      <div>
        <List people={people} handleDelete={handleDelete} />
      </div>
    </>
  );
};

const List = ({ people, handleDelete }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <SinglePerson {...person} handleDelete={handleDelete} />
          </div>
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, handleDelete }) => {
  return (
    <>
      <h3>single item</h3>
      <h2>{name}</h2>
      <button 
      type='button'
      onClick={()=>handleDelete(id)}> delete</button>
    </>
  );
};

export default App;
