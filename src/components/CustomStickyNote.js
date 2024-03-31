import React, { useState } from "react";

export default function CustomStickyNote({ onAddNewNote }) {
  const [body, setBody] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!body) return;
    const newNote = {
      id: Date.now(),
      body,
      bgColor: bgColor ? bgColor : "", 
    };
    onAddNewNote(newNote);
    setIsOpen(!isOpen);
    setBody("");
  }

  function handleOpenCloseForm() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="add-new-note-div" onClick={handleOpenCloseForm}>
        {isOpen ? <button>❌</button> : <button>➕</button>}
      </div>

      <form
        onSubmit={handleSubmit}
        className="custom-sticky-note-form"
        style={{ display: `${isOpen ? "block" : "none"}` }}
      >
        <label className="custom-sticky-note-label">Body</label>
        <textarea
          max-rows={5}
          className="custom-sticky-note-input"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          resize= "none"
        />
        <button className="custom-sticky-note-button">Add New Note</button>
      </form>
    </>
  );
}
