import React, { useState } from 'react';
import Sidebar from './Component/Sidebar';
import CreateNote from './Component/CreateNote';
import NotesCollection from './Component/NotesCollection';
import { PiFilesFill } from 'react-icons/pi';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    setEditIndex(null); // Exit edit mode when adding a new note
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setEditIndex(null); // Exit edit mode when deleting a note
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSaveEdit = (index, editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
    setEditIndex(null); // Exit edit mode after saving
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <>
      <div className="container h-full px-4">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex-1 h-full p-4 bg-blue-50">
            <div>
              <CreateNote onAddNote={handleAddNote} />
            </div>
            <div className="mt-6 ml-3 flex items-center -gap-3">
              <PiFilesFill size={30} />
              <h1 className="text-2xl text-blue-800 ml-6 font-bold">My Notes</h1>
            </div>
            <p className="text-md text-gray-900 ml-6 mt-6">Recently Viewed</p>

            <div className="w-auto flex flex-row flex-wrap items-center">
              <NotesCollection
                notes={notes}
                onDeleteNotes={handleDelete}
                onEdit={handleEdit}
                onEditNote={handleEdit}
                editIndex={editIndex}
                onSaveEdit={handleSaveEdit}
                onCancelEdit={handleCancelEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
