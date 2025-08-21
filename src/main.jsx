import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./assets/Component/Header/Header"
import Note from './assets/Component/Note/Note.jsx'
import Footer from './assets/Component/Footer/Footer.jsx'
import notes from './assets/Component/Note/notes.js'
import CreateArea from './assets/Component/CreateArea/CreateArea.jsx'


// function createNote(notes) {
//   return (
//     <Note
//       key={notes.id}      // ✅ unique key for React list rendering
//       title={notes.title} // ✅ use props correctly
//       content={notes.content}
//     />
//   );
// }
function Task() {
  const [notes, setNotes] = useState([])

  function AddNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return  prevNotes.filter((noteitem,index)=>{
        return index !== id
       })
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={AddNote} />
      <div className='note2'>
        {notes.map((noteItem, index) => {
          return (
            <Note 
              key={index} 
              id={index}
              title={noteItem.title} 
              content={noteItem.content} 
              onDelete={deleteNote}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Task />
  </StrictMode>
)

