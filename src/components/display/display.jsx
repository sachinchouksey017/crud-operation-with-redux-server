import React from 'react';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import './display.scss'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeNote, updateNoteByIndex } from '../../redux/actions/actions'
import note_service from '../../services/note_service';
const Display = () => {
    const [noteArray, setNoteArray] = useState([
        {
            title: 'test',
            description: 'home'
        },
        {
            title: 'test',
            description: 'home'
        },
        {
            title: 'test',
            description: 'home'
        },
        {
            title: 'test',
            description: 'home'
        },
    ])
    const [noteUpdate, setNoteUpdate] = useState({
        title: '',
        description: '',
        id: new Date().getTime()
    })
    const [noteUpdateIndex, setNoteUpdateIndex] = useState(-1)

    const [open, setOpen] = React.useState(false);
    const storeData = useSelector(state => state);

    const dispatch = useDispatch();
    const handleClickOpen = (note, ind) => {
        setNoteUpdate(note)
        setNoteUpdateIndex(ind)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateNote = () => {
        handleClose()
        dispatch(updateNoteByIndex(noteUpdateIndex,noteUpdate))
        note_service.updateNote(noteUpdate.id, noteUpdate).then(data => {
        }).catch(err => {
        })
    }
    const deleteNote = (id) => {
        dispatch(removeNote(id))
        note_service.deleteNote(id).then(data => {
        }).catch(err => {
        })
    }
    return (
        <>
            <div className='display'>
                {
                    storeData?.notes.map((note, index) => (
                        <div key={index} className='card'>
                            <div className='title' onClick={() => handleClickOpen(note,index)}>{note.title}</div>
                            <div className='des' onClick={() => handleClickOpen(note,index)}>{note.description}</div>
                            <div className='action'>
                                <IconButton onClick={() => deleteNote(note.id)} className='button' color="primary" aria-label="upload picture" component="span">
                                    <DeleteIcon fontSize='small' />
                                </IconButton>
                            </div>
                        </div>
                    ))
                }


            </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                    className='update'
                >
                    <input className='title' type="text" placeholder='Title' value={noteUpdate.title} onChange={(e) => setNoteUpdate({ ...noteUpdate, title: e.target.value })} />
                    <textarea className='des' name="description" value={noteUpdate.description} onChange={(e) => setNoteUpdate({ ...noteUpdate, description: e.target.value })} placeholder='description' id="" rows="3"></textarea>

                    <DialogActions>

                        <Button onClick={updateNote} color="primary" autoFocus>
                            update
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}
export default Display;