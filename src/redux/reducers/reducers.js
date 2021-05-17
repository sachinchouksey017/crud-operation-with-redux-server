import { ADD_NOTE, REMOVE_NOTE, Get_Note, Set_Notes, Update_Note } from '../actions/actions';
import NoteService from '../../services/note_service'
const initialState = {
  notes: [

  ]


};


function rootReducer(state = initialState, action) {
  console.log('i am in reducer old state', action);
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          action.data
        ]
      }
    case REMOVE_NOTE:
      return {
        notes: state.notes.filter((note) => note.id !== action.id)
      };
    case Get_Note:
      return {
        notes: state.notes
      }
    case Set_Notes:
      return {
        notes: action.data
      }
    case Update_Note:
      state.notes[action.index] = action.data
      return {
        notes: state.notes
      }
    default:
      return state;
  };
}

export default rootReducer;





