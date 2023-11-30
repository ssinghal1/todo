import React from 'react';
import TodoRowItem from './TodoRowItem';

const TodoTable = (props) => {
  return (

    <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {props.todo.map(todo => (

                <TodoRowItem
                key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              rowDescription={todo.rowDescription}
              rowAssigned={todo.rowAssigned}
              />

                ))
            }
            </tbody>
          </table>

    
  )
};

export default TodoTable;