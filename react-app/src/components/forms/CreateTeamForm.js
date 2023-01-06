import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createTeam } from "../../store/teams";
import { useNotification } from "../../context/Notification";
import styles from '../cssModules/CreateTeam.module.css'

const CreateTeamForm = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [teamType, setTeamType] = useState('default')
    const { setOpen, setShowModal, setContent } = useNotification()

    const onSubmit = e => {
        e.preventDefault();

        const team = {
            owner_id: user.id,
            name,
            type: teamType
        };

        if (name === '') {
            setContent('Please Enter a Team Name')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
            return;
        }

        if (teamType === 'default') {
            setContent('Please Select a Team Type')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
            return;
        }

        return dispatch(createTeam(team))
        .then((data) => {
            setName('');
            setTeamType('');
            history.push(`/teams/${data.type}/${data.id}`)
        })
        .catch(async (res) => {
            const data = await res.json();
            setContent(data.errors[0])
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
        })

    };

    const TYPES = ['Solo', 'Duo', 'Squad']

    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
                <div className={styles.formContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="name">
                            <input 
                                className={styles.input}
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder='Team Name'
                            />
                        </label>
                        <label htmlFor="type">
                            <select className={styles.select} onChange={(e) => setTeamType(e.target.value)} value={teamType}>
                                <option value='default' disabled hidden>Select Team Type</option>
                                {TYPES.map(type => (
                                    <option
                                        key={type}
                                        value={type}
                                    >{type}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default CreateTeamForm;
