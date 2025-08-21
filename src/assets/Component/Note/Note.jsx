
import React from 'react'

function Note(props) {

  function deleteHandle(){
    props.onDelete(props.id)
  }
  return (
    
    <div className='note1'>
         <h1>{props.title}</h1>
        <p> {props.content}  </p>
        <button onClick={deleteHandle}>Delete</button>
    </div>

  
  )
}

export default Note
