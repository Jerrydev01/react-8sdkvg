import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'hello world'}</h1>
      <h1>{!text && <h1>hello world</h1>}</h1>
    </>
  );
}
