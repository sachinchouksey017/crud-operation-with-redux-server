import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Create from '../create/create';
import Display from '../display/display';
import './dashboard.scss'
import { setAllNotes } from '../../redux/actions/actions'
import note_service from '../../services/note_service';
const Dashboard = () => {
    let dispatch = useDispatch()
    const getAllNotesBackend = () => {
        note_service.getAllNotes().then(res => {
            console.log('data after', res.data);
            dispatch(setAllNotes(res.data))

        }).catch(err => {
            console.log('error after', err);
        })
    }
    useEffect(() => {
        getAllNotesBackend()
    }, [])
    return (
        <>
            <header className='header'>CRUD Operation</header>
            <Create />
            <Display />
        </>
    )
}
export default Dashboard;