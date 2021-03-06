import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
import Swal from 'sweetalert2';
import moment from 'moment';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const { active:note } = useSelector(state => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  }

  const handlePictureClick = () => {
    Swal.fire({
      title: 'Picture will be saved to your note automaticaly, do you want to continue?',        
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const fileInput = document.getElementById('fileSelector');
        fileInput.click();
      }
    })      
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
      dispatch( startUploading( file ) );
    }
  }

  return (
    <div className='notes__appbar'>
      <span>{ moment().format("MMM Do YYYY") }</span>
      <input 
        id='fileSelector'
        type='file'  
        name='file'      
        style={{ display:"none" }}
        onChange={handleFileChange}/>
      <div>
        <button className='btn' onClick={handlePictureClick}>
          Pinture
        </button>
        <button className='btn' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
