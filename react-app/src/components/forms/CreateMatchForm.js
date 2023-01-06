import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TeamOptions from "../CreateMatchModal/TeamOptions";

import { postMatch } from "../../store/matches";
import { useNotification } from "../../context/Notification";
import styles from '../cssModules/CreateMatch.module.css'

const CreateMatchForm = ({ setShowMatchModal }) => {
    const [matchType, setMatchType] = useState('all')
    const [matchTeamId, setMatchTeamId] = useState('')
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const { setContent, setOpen, setShowModal } = useNotification()

    const userTeams = [
        ...Object.values(user.Solo),
        ...Object.values(user.Duo),
        ...Object.values(user.Squad)
    ]

    const TYPES = ['Solo', 'Duo', 'Squad']

    let teams;
    if (matchType === 'all') {
        teams = userTeams
    } else {
        teams = [...Object.values(user[matchType])]
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (matchType === 'all') {
            setContent('Please Select a Match Type')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
            return;
        } else if (matchTeamId === '') {
            setContent('Please Select a Team')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
            return;
        }

        const match = {
            type: matchType,
            team_id: matchTeamId
        };

        dispatch(postMatch(match)).then(() => {
            setContent('Match Posted')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
            setMatchTeamId('');
            setMatchType('all');
            setShowMatchModal(false);
            history.push('/my-matches')
        }).catch((res) => {

            setContent(res.errors[0])
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
        })
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <label htmlFor="type">
                        <div className={styles.typeContainer}>
                            <span className={styles.teamSelect}>Select Match Type</span>
                            <select className={styles.select} onChange={(e) => setMatchType(e.target.value)} value={matchType}>
                                <option value='all' disabled hidden>Select Match Type</option>
                                {TYPES.map(type => (
                                    <option
                                        key={type}
                                        value={type}
                                    >{type}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <label htmlFor="team">
                        <span className={styles.teamSelect}>Select Team</span>
                        <div className={styles.optionsContainer}>
                            <TeamOptions matchType={matchType} matchTeamId={matchTeamId} setMatchTeamId={setMatchTeamId} teams={teams} />
                        </div>
                    </label>
                    <div className={styles.btnContainer}>

                        <button className={styles.btn}>Post Match</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default CreateMatchForm;
