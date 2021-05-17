import { useState } from 'react';
import './create.scss'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/actions/actions'
import note_service from '../../services/note_service';
let initialNoteData = {
    title: '',
    description: '',
    id: new Date().getTime()
}
const Create = () => {
    const [open, setOpen] = useState(false)
    const [noteData, setNoteData] = useState(initialNoteData)
    const dispatch = useDispatch();

    const saveNote = () => {
        console.log(noteData);
        if (noteData.title.trim().length > 0) {
            noteData.id = new Date().getTime()
            dispatch(addNote(noteData))
            note_service.create(noteData).then(data => {
                setNoteData(initialNoteData)
            }).catch(err => {

            })
        }
        setOpen(false)

    }

    return (
        <div className='create-parent'>

            {
                open ? <div className='note large-note' >
                    <input className='title' type="text" placeholder='Title' onChange={(e) => setNoteData({ ...noteData, title: e.target.value })} />
                    <textarea className='des' name="description" onChange={(e) => setNoteData({ ...noteData, description: e.target.value })} placeholder='description' id="" rows="3"></textarea>
                    <div className='action'>
                        <Button onClick={saveNote} variant="contained" color="primary">
                            Save
      </Button>
                    </div>
                </div> :
                    <div className='note' onClick={() => setOpen(true)}>Take a Note ..</div>

            }

        </div >
    )
}
export default Create;