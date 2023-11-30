
import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoTable from './components/TodoTable';

function App() {

      const [todo, setTodo] = useState ([
        {rowNumber:1 , rowDescription:"Finish dinner", rowAssigned:"Sam"},
        {rowNumber:2 , rowDescription:"Feed puppy", rowAssigned:"Sam"},
        {rowNumber:3 , rowDescription:"Water Plants", rowAssigned:"Sam"},
        {rowNumber:4 , rowDescription:"Clean House", rowAssigned:"Sam"}
      ])

      const addTodo = (description,assigned) => {
          let rowNumber=0
          if(todo.length>0)
          {
            rowNumber=todo[todo.length-1].rowNumber+1;
          }
          else{
            rowNumber=1;
          }
              const newTodo = {
            rowNumber : todo.length + 1,
            rowDescription:description,
            rowAssigned :assigned
              };

              setTodo (todo => [...todo, newTodo])
          
      }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          To Do's
        </div>
        <div className='card-body'>
          <TodoTable todo ={todo}/>
          <button className="btn btn-primary" onClick={addTodo}>Add New Todo</button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
