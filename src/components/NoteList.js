import React from 'react'
import { useSelector } from 'react-redux'
import Note from "./Note"


export default function NoteList() {
    const notes = useSelector(state=>state.notes)
    console.log(notes)

  return (
    <div>
        <h1>List des Notes </h1>
        {notes.map((note,index)=><Note key={index} note={note}/>)}
    </div>
  )
}
