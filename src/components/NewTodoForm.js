import React, { useState } from 'react';

const NewTodoForm = (props) => {

        const [description, setDescription]= useState('');
        const [assigned, setAssigned]= useState('');

        const submitTodo = ()=>{
            if(description!=='' && assigned!=='')
            {
                props.addTodo(description,assigned);
            }
        }

        const descriptionChange=(e)=>{
            console.log(e.target.value);
            setDescription(e.target.value);
        }

        const assignedChange=(e)=>{
            console.log(e.target.value);
            setAssigned(e.target.value);
        }

  return (
    <div className="mt-5">
        <form>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input className='form-control' type='text' required onChange={assignedChange} value={assigned}
                ></input>
            </div>
            
            <div className='mb=3'>
                <label className='form-label'>Description</label>
                <textarea className='form-control' rows={2} required onChange={descriptionChange} value={description}
                ></textarea>
            </div>
                <button className='btn btn-primary mt-2' type='button' onClick={submitTodo}>Add New Todo</button>

        </form>

    </div>
  )
}

export default NewTodoForm;