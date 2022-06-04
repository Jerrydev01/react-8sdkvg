import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
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
          onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
