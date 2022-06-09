import React, { useState, useReducer } from 'react';
import './style.css';

import Modal from './Modal';
import { data } from './Data';

// useReducer function

const reducer=(state,action)=>{
  if(action.type==='TESTING'){
    return{
      ...state,
      people:data,
      isModalOpen:true,
      modalContent:'add item'
    }
  }
  throw new Error('no matching action type')
}

const defaultState={
  people:[],
  isModalOpen:false,
  modalContent:'',
};

const App = () => {
  const [name, setName] = useState('');
  const [state,dispatch]= useReducer(useReducer,defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({type:'TESTING'})
    } else {
      dispatch({type:'RANDOM'})
    }
  };
  return (
    <>
      <h2>useReducer</h2>
      {state.isModalOpen && <Modal modalContent={modalContent}/>}

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
      {state.people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </>
  );
};

export default App;
