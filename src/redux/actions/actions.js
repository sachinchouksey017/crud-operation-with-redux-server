import note_service from "../../services/note_service";

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const Get_Note = 'Get_Note';
export const Set_Notes = 'Set_Notes';
export const Update_Note = 'Update_Note';


export function addNote(data) {
  // console.log('i am in add action');
  return { type: ADD_NOTE, data: data };
}

export function removeNote(index) {

  return { type: REMOVE_NOTE, id: index };
}
export function setAllNotes(data) {
  console.log('i am in remove action', data);
  return { type: Set_Notes, data: data };
}
export function getAllNotes() {
  return { type: Get_Note };
}
export function updateNoteByIndex(index, data) {
  return { type: Update_Note, index: index, data: data };
}
