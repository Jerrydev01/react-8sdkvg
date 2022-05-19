import React from "react";
import "./style.css";

export default function App({title,children}) {
  const lists=[
  {
    name: 'jerry',
    age: 23,
    lastName: 'francis'
  },
{
  name:'peace',
  age: 32,
  lastName: 'franky'
}
]

  return (
    <div>
      <h1>Hello Stack</h1>
      <p></p>
      {lists.map((list)=>{
        console.log(list)
        return <h1>{list.lastName}</h1>
      })}
    </div>
  );
}



export default function Props() {
  return (
    <div>
    <App title='james'>
      <p>loremergjkkfcchjj</p>
    </App>
    </div>
  );
}
