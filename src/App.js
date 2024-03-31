import { useState } from "react";
import StickyNotesList from "./components/StickyNotesList.js";
import CustomStickyNote from "./components/CustomStickyNote.js";

function App() {
 
  const [notes, setNotes] = useState([]);

  function handleUpdateNoteBody(value, id){
    const newNote = {
      id: id,
      body: value
    };
    setNotes((notes) => notes.map((note) => note.id === id? newNote : note));
  }

  function handleBackgroundColor(){
  }

  function addNewNote(note) {
    setNotes((notes) => [...notes, note]);
  }

  return (
    <div className="app">
      <CustomStickyNote onAddNewNote={addNewNote} />
      <StickyNotesList notes={notes}  onUpdateNote={handleUpdateNoteBody} />
    </div>
  );
}

export default App;
