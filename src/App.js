import React, { useState, useReducer } from 'react';
import './style.css';

import Modal from './Modal';
import { data } from './Data';

const App = () => {
  const [people, setPeople] = useState(data);
  const [isShowModal, setIsShowModal] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setIsShowModal(true);
      setPeople([...people, name, id]);
      setName('');
    } else {
      SetIsShowModal(true);
    }
  };
  return (
    <>
      <h2>useReducer</h2>
      {isShowModal && <Modal />}

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
        return <div key={id}>{petson.name}</div>;
      })}
    </>
  );
};

export default App;
