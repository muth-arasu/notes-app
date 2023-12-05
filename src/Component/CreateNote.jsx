import React, { useState, useEffect } from 'react';

const CreateNote = ({ onAddNote, onEditNote, editMode, initialNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (editMode && initialNote) {
      setNote(initialNote);
    }
  }, [editMode, initialNote]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (note.title.trim() !== '' && note.content.trim() !== '') {
      if (editMode) {
        onEditNote(note);
      } else {
        onAddNote(note);
      }

      setNote({
        title: '',
        content: '',
      });
    }
  };

  return (
    <>
      <div className="h-72 w-full bg-white shadow-lg rounded-xl p-4">
        <div className="flex justify-between px-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-3">{editMode ? 'Edit Note' : 'Add a Note'}</h1>
          <button
            className={`px-4 py-2 bg-bluess-700 text-white rounded-xl ${
              note.title.trim() === '' || note.content.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleSave}
            disabled={note.title.trim() === '' || note.content.trim() === ''}
          >
            {editMode ? 'Update' : 'Save'}
          </button>
        </div>
        <div className="flex flex-col ml-12 gap-6">
          <div>
            <label htmlFor="title" className="text-3xl font-semibold p-4">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={note.title}
              className="h-12 bg-transparent text-2xl font-md text-blue-700 rounded-xl focus:outline-none focus:ring focus:ring-blue-200 w-96 "
              placeholder="Ex: Story of Hero"
              onChange={handleChange}
            />
          </div>
          <textarea
            name="content"
            value={note.content}
            cols="30"
            rows="10"
            className="w-6/8 h-32 bg-transparent mr-12 text-xl font-md text-gray-600 focus:outline-none focus:ring focus:ring-blue-200 rounded-xl"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="ml-6 mt-6"></div>
      </div>
    </>
  );
};

export default CreateNote;
