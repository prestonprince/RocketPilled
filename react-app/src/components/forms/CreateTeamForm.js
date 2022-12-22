import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createTeam } from "../../store/teams";

const CreateTeamForm = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [teamType, setTeamType] = useState('default')

    const onSubmit = e => {
        e.preventDefault();

        const team = {
            owner_id: user.id,
            name,
            type: teamType
        };

        return dispatch(createTeam(team))
        .then((data) => {
            setName('');
            setTeamType('');
            history.push(`/teams/${data.type}/${data.id}`)
        })
        .catch(async (res) => {
            const data = await res.json();
            console.log(data)
        })

    };

    const TYPES = ['Solo', 'Duo', 'Squad']

    return (
        <div>
            <h2><span>Create</span> Team</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">
                    <input 
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Team Name'
                    />
                </label>
                <label htmlFor="type">
                    <select onChange={(e) => setTeamType(e.target.value)} value={teamType}>
                        <option value='default' disabled hidden>Select Team Type</option>
                        {TYPES.map(type => (
                            <option
                                key={type}
                                value={type}
                            >{type}</option>
                        ))}
                    </select>
                </label>
                <button>Create</button>
            </form>
        </div>
    )
};

export default CreateTeamForm;
