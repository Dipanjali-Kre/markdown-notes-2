import React from 'react';
import './Sidebar.css';

function Sidebar({ notes, selectedNoteId, onSelectNote, onNewNote, onDeleteNote }) {
  const sortedNotes = [...notes].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Notes</h2>
        <button onClick={onNewNote} className="new-note-button">+</button>
      </div>
      <div className="note-list">
        {sortedNotes.length === 0 ? (
          <p className="no-notes-message">No notes yet. Click '+' to create one!</p>
        ) : (
          sortedNotes.map((note) => (
            <div
              key={note.id}
              className={`note-list-item ${note.id === selectedNoteId ? 'active' : ''}`}
              onClick={() => onSelectNote(note.id)}
            >
              <div className="note-title-preview">
                <h3>{note.title}</h3>
                <small>{new Date(note.timestamp).toLocaleString()}</small>
              </div>
              <button
                className="delete-note-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent selecting the note when deleting
                  onDeleteNote(note.id);
                }}
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;
