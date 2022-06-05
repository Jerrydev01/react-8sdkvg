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
    setPeople([...people, name, id]);
    if (name) {
      setIsShowModal(true);
    } else {
      setIsShowModal(true);
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
    </>
  );
};

export default App;
