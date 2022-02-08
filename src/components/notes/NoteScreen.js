import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input 
          type="text"
          placeholder="Some awesome title"
          className='notes__title-input'
        />
        <textarea          
          className='notes__textarea'
          placeholder='What is on your mind?'          
        >
        </textarea>
        <div className='notes__image'>
          <img 
            src='https://www.soundpark.news/__export/1614989930614/sites/debate/img/2021/03/05/rose-blackpink_crop1614989930094.jpg_340227010.jpg'
            alt='blackpink'
          />
        </div>        
      </div>
    </div>
  );
};
