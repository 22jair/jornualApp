import { db } from "../firebase/firebase-config"


export const loadNotes = async (uid) => {  
  const notes = [];
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  notesSnap.docs.forEach( doc => {
    notes.push({
      id: doc.id,
      ...doc.data()
    })
  }); 
  return notes;
}