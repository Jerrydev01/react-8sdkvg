import React, { useState, useEffect} from 'react';
import './style.css';

import { data } from './Data';

export default function App() {
  // console.log(useState('hello'))
  const [size, setSize] = useState(window.innerWidth);
console.log(size)
const sizeChange =()=>{
  setSize(window.innerWidth)
  return ()=>{
    setSize(window.innerWidth)
  }
}
useEffect(()=>{
window.addEventListener('resize', sizeChange)
});
  return (
    <>
<h1>UseEffect cleanup</h1>
  <h2>{size}px</h2>
    </>
  );
}
