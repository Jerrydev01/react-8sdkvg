import React, { useState, useEffect } from 'react';
import './style.css';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    // code
    setTimeout(()=>{
      closeModal();
    },3000)
  });
  return (
    <>
      <h2>{modalContent}</h2>
      <p>{closeModal}</p>
    </>
  );
};

export default Modal;
