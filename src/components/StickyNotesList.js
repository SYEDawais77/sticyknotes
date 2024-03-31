import { useState } from "react";

export default function StickyNotesList({ notes, onUpdateNote }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenCloseForm() {
    setIsOpen(!isOpen);
  }
  return (
    <ul className="sticky-notes-container">
      {notes.map((note) => (
        <li
          key={note.id}
          className={`sticky-note`}
          style={{ backgroundColor: note.bgColor }}
        >
        <div className="pin"></div>
          <textarea
            name="note-text-area"
            className="note-text-area"
            cols="12"
            rows="6"
            value={note.body}
            onChange={(e) => onUpdateNote(e.target.value, note.id)}
          >
            {note.body}
          </textarea>
        </li>
      ))}
      <li>
        <div className="add-new-note-div" onClick={handleOpenCloseForm}>
          {isOpen ? <button>❌</button> : <button>➕</button>}
        </div>
      </li>
    </ul>
  );
}
