import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { noteLoggout, startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';
import Swal from 'sweetalert2';

export const Sidebar = () => {

  const { name } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const handleLogout = () => {    
    Swal.fire({
      title: 'Do you want to Logout?',        
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startLogout() );
        dispatch( noteLoggout() );
      }
    })  
  }

  const handleAddNew = () => {
    Swal.fire({
      title: 'You want to add new Entry?',
      text: "This Note will be saved to your journal.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startNewNote() );
      }
    })
  }

  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar-navbar'>
        <h3 className='mt-5'>
          {/* <i className='far fa-moon'></i> */}
          User:
          <span> { name } </span>
        </h3>
        <button className='btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='journal__new-entry' onClick={ handleAddNew }>
        <i className='far fa-calendar-plus fa-5x'></i>
        <p className='mt-5'>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
