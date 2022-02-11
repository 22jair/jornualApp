import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import Swal from 'sweetalert2';

export const NoteScreen = () => {

  const dispatch = useDispatch();
  const { active:note } = useSelector(state => state.notes);  
  const [ formValues, handleInputChange, reset ] = useForm(note);
  const { body, title } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    if( note.id !== activeId.current ){
      reset(note);
      activeId.current = note.id
    }    
  }, [note, reset])

  useEffect(() =>{
    dispatch( activeNote( formValues.id, { ...formValues } ));
  }, [formValues,dispatch]) 

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startDeleting(formValues.id) );
      }
    })    
  }

  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>        
        <input 
          type="text"
          placeholder="Some awesome title"
          className='notes__title-input'
          value={title}
          name='title'
          onChange={handleInputChange}
        />
        <textarea          
          className='notes__textarea'
          placeholder='What is on your mind?'
          value={body}
          name='body'
          onChange={handleInputChange}
        >
        </textarea>
        { 
          note.url 
            ? <div className='notes__image'>
                <img 
                  src={note.url}
                  alt='blackpink'
                  name='url'
                  onChange={handleInputChange}
                />
              </div>        
            : null
        }        
      </div>
      <button className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
