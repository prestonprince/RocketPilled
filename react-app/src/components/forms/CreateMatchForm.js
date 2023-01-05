import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TeamOptions from "../CreateMatchModal/TeamOptions";

import { postMatch } from "../../store/matches";
import { useNotification } from "../../context/Notification";

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
            history.push('/')
        }).catch((res) => {

            setContent(res.errors[0])
            console.log(res)
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
        })
    }

    return (
        <div>
            <h2>Create Match Form</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="type">
                    <select onChange={(e) => setMatchType(e.target.value)} value={matchType}>
                        <option value='all' disabled hidden>Select Match Type</option>
                        {TYPES.map(type => (
                            <option
                                key={type}
                                value={type}
                            >{type}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="team">
                    <TeamOptions setMatchTeamId={setMatchTeamId} teams={teams} />
                </label>
                <button>Post Match</button>
            </form>
        </div>
    )
};

export default CreateMatchForm;
