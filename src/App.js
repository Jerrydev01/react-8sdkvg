import React, { useState, useReducer } from 'react';
import './style.css';

import Modal from './Modal';
import { data } from './Data';

// useReducer function

const reducer=(state,action)=>{
  if(action.type==='ADD_ITEM'){
    const newPeople=[...state.people,action.payload]
    return{
      ...state,
      people:newPeople,
      isModalOpen:true,
      modalContent:'add item'
    }
  }
  if(action.type==='NO_VALUE'){
    return {...state,isModalOpen:true,modalContent:'please enter a value'}
  }
  if(action.type==="CLOSE_MODAL"){
    return {...state,isModalOpen:false}
  }
  throw new Error('no matching action')
}

const defaultState={
  people:[],
  isModalOpen:false,
  modalContent:'',
};
const App = () => {
  const [name, setName] = useState('');
  const [state,dispatch]= useReducer(reducer,defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem={id: new Date().getTime().toString(),name}
      dispatch({type:'ADD_ITEM', payload:newItem})
    } else {
      dispatch({type:'NO_VALUE'})
    }
  };
  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'})
  }
  return (
    <>
      <h2>useReducer</h2>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}

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
