import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar';
import MainEditor from './components/MainEditor';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('markdown-notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    localStorage.setItem('markdown-notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0 && !selectedNoteId) {
      setSelectedNoteId(notes[0].id);
    } else if (notes.length === 0) {
      setSelectedNoteId(null);
    }
  }, [notes, selectedNoteId]);

  const handleNewNote = () => {
    const newNote = {
      id: uuidv4(),
      title: 'Untitled Note',
      content: '# New Note\n\nStart writing your markdown here!',
      timestamp: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  const handleSelectNote = (id) => {
    setSelectedNoteId(id);
  };

  const handleUpdateNote = (updatedContent) => {
    setNotes(notes.map((note) =>
      note.id === selectedNoteId
        ? { ...note, content: updatedContent, timestamp: Date.now(), title: updatedContent.split('\n')[0].replace(/^[#\s]*/, '') || 'Untitled Note' }
        : note
    ));
  };

  const handleDeleteNote = (idToDelete) => {
    const filteredNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(filteredNotes);
    if (selectedNoteId === idToDelete) {
      setSelectedNoteId(filteredNotes.length > 0 ? filteredNotes[0].id : null);
    }
  };

  const currentNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <div className="app-container">
      <Sidebar
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSelectNote={handleSelectNote}
        onNewNote={handleNewNote}
        onDeleteNote={handleDeleteNote}
      />
      <MainEditor
        currentNote={currentNote}
        onContentChange={handleUpdateNote}
      />
    </div>
  );
}

export default App;
