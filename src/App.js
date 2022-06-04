import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { id:new Date().getTime().toString(), name, email };
      setPeople((people) => {
        return [...people, person];
      });

      setName('');
      setEmail('');
    } else {
      console.log('world');
    }
  };
  return (
    <>
      <h2>FORMS</h2>
      <div className="form" onSubmit={handleSubmit}>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        {people.map((person) => {
          const {id, name, email} = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
