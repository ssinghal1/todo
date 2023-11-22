import React from 'react';

const TodoRowItem = (props) => {

        

  return (
    <>
         <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    </>
  )
};

export default TodoRowItem;