import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const NotesCollection = ({ notes, onDeleteNotes, onEditNote, editIndex, onSaveEdit, onCancelEdit }) => {
  const [editedNote, setEditedNote] = useState({ title: '', content: '' });
  const params =useParams()
  const handleEditChange = (e) => {
    setEditedNote({
      ...editedNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveEdit = (index) => {
    onSaveEdit(index, editedNote);
    setEditedNote({ title: '', content: '' });
  };

  const handleCancelEdit = () => {
    onCancelEdit();
    setEditedNote({ title: '', content: '' });
  };

  return (
    <div className='flex flex-wrap'>
      {notes.map((note, index) => (
        <div className='w-72 h-72 bg-white shadow-lg m-6 rounded-lg p-6 flex flex-col gap-3' key={index}>
          <header className='flex px-2 py-1 justify-between text-xl font-semibold text-bluess-800 w-full h-12 relative '>
            {editIndex === index ? (
              <>
                <input
                  type='text'
                  name='title'
                  value={editedNote.title}
                  onChange={handleEditChange}
                  className='text-xl text-bluess-800 font-semibold bg-transparent border-b border-bluess-800 focus:outline-none'
                />
                <div className='flex gap-3 absolute -top-12 left-16'>
                  <button onClick={() => handleSaveEdit(index)} className='bg-bluess-800 text-white px-2 py-1 rounded-md'>Save</button>
                  <button onClick={handleCancelEdit} className='bg-bluess-800 text-white px-2 py-1 rounded-md'>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h2 className='text-xl text-bluess-800 font-semibold'>{note.title}</h2>
                <div className='flex gap-3 '>
                  <MdModeEditOutline size={25} onClick={() => onEditNote(index)} />
                  <MdDelete size={25} onClick={() => onDeleteNotes(index)} />
                </div>
              </>
            )}
          </header>
          <div>
            {editIndex === index ? (
              <textarea
                name='content'
                value={editedNote.content}
                onChange={handleEditChange}
                className='w-full h-32 bg-transparent mr-12 text-xl font-md text-gray-600 focus:outline-none focus:ring focus:ring-blue-200'
              ></textarea>
            ) : (
              <p className='text-lg text-gray-700'>{note.content}</p>
            )}
          </div>
          <footer className='w-full h-12'></footer>
        </div>
      ))}
    </div>
  );
};

export default NotesCollection;
