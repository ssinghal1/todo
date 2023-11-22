
import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {

      const todo = [
        {rowNumber:1 , rowDescription:"Finish dinner", rowAssigned:"Sam"},
        {rowNumber:2 , rowDescription:"Feed puppy", rowAssigned:"Sam"},
        {rowNumber:3 , rowDescription:"Water Plants", rowAssigned:"Sam"}
      ];

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          To Do's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem
              rowNumber={todo[0].rowNumber}
              rowDescription={todo[0].rowDescription}
              rowAssigned={todo[0].rowAssigned}
              />
              <TodoRowItem
              rowNumber={todo[1].rowNumber}
              rowDescription={todo[1].rowDescription}
              rowAssigned={todo[1].rowAssigned}
              />
              <TodoRowItem
              rowNumber={todo[2].rowNumber}
              rowDescription={todo[2].rowDescription}
              rowAssigned={todo[2].rowAssigned}
              />
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

export default App;
