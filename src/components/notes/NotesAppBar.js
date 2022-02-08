import React from 'react';

export const NotesAppBar = () => {
  return (
    <div className='notes__appbar'>
      <span>28 de agosto 2020</span>
      <div>
        <button className='btn'>
          Pinture
        </button>
        <button className='btn'>
          Save
        </button>
      </div>
    </div>
  );
};
