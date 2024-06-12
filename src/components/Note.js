import React from 'react'
import { useDispatch } from 'react-redux';
import { removeNote } from './store'

const Note = ({note}) => {
    const dispatch = useDispatch()

  return (
    <div className='note'>
        <h2>{note.title}</h2>
        <p>{note.contenu}</p>
        <button onClick={()=>dispatch(removeNote(note.title))}>Delete</button>
    </div>
  );
};
export default Note;