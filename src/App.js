import React, { useState, useReducer } from 'react';
import './style.css';

import Modal from './Modal';
import { data } from './Data';

const App = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, name, id]);
      setName('');
    } else {
      SetShowModal(true);
    }
  };
  return (
    <>
      <h2>useReducer</h2>
      {showModal && <Modal />}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </>
  );
};

export default App;
