import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    try{
      const doc = db.collection(`${uid}/journal/notes`).add( newNote );
      dispatch( activeNote( doc.id, newNote ) );  
    }catch(error){
      //console.log(error.message);
      console.log("startNewNote");
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
    
  } 
}

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: { id, ...note }
  }
}

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch( setNotes(notes) );
  }
}

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes
  }
}

export const startSaveNote = (note) => {
  return async ( dispatch, getState ) => {
    const { uid } = getState().auth;
    const noteToSave = { ...note };
    delete noteToSave.id;  
    console.log(note);
    try{
      await db.collection(`${uid}/journal/notes`).doc(note.id).update(noteToSave);
      // This work but is not the best way to do it
      // cuz here we are using the same function to load all notes
      // and we want just to update the note that we have saved
      // -----------------------------------------------------
      // dispatch( startLoadingNotes( uid ) );
      dispatch( refreshNote( note.id, noteToSave ) );
      Swal.fire('Saved', note.title, 'success');
    }catch(error){
      console.log(error.message);
      console.log("startSaveNote");
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  }
}

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdated,
    payload: { id, note: { id, ...note } }
  }
}

export const startUploading = ( file ) => {
  return async ( dispatch, getState ) => {
    let { active: activeNote } = getState().notes;

    try{
      Swal.fire({
        title:'Uploading...',
        text: 'Please wait...',
        allowOutsideClick: false,
        showConfirmButton:false,
        didOpen: () => {
          Swal.showLoading();
        }
      })
      const fileUrl = await fileUpload( file );
      console.log("url", fileUrl)
      activeNote.url = fileUrl;
      dispatch( startSaveNote( activeNote ) );
      Swal.close();
    }catch(error){
      //console.log(error.message);
      console.log("startUploading")
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  }
}

export const startDeleting = ( id ) => {
  return async ( dispatch, getState ) => {

    try{
      Swal.fire({
        title:'Deleting...',
        text: 'Please wait...',
        allowOutsideClick: false,
        showConfirmButton:false,
        didOpen: () => {
          Swal.showLoading();
        }
      })
      const uid = getState().auth.uid;
      await db.doc(`${uid}/journal/notes/${id}`).delete();
      dispatch( deleteNote( id ) );
      Swal.close();

    }catch(error){
      console.log("startDeleting", error.message);      
      Swal.fire('Error', 'Something went wrong.', 'error');
    }
  }
}

export const deleteNote = ( id ) => {
  return {
    type: types.notesDelete,
    payload: id
  }
}