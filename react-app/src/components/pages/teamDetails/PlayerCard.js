import { useDispatch, useSelector } from "react-redux";
import { removeTeamMember } from "../../../store/teams";

const PlayerCard = ({ team, player, setRemovePlayer }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const handleKick = () => {
        dispatch(removeTeamMember(player.id, team)).then(() => setRemovePlayer(prevState => !prevState))
    }

    return (
        <div>
            <span>{player.username}</span>
            {team.owner_id !== player.id && user.id === team.owner_id && (
                <button onClick={handleKick}>Kick</button>
            )}
        </div>
    )
};

export default PlayerCard;
