import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addNote} from './store'

const AddNoteFrom = () => {
    const [note,setNote] = useState({})
    const dispatch = useDispatch()
    const handlechange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
        console.log(note)
    }
    const handleclick =()=>{
        dispatch(addNote(note))
    }
  return (
    <div className='note'>
        <input type='text' onChange={handlechange} name='title'></input>
        <input type='text' onChange={handlechange} name='contenu'></input>
        <button onClick={handleclick}>Add</button>
    </div>
  )
}

export default AddNoteFrom