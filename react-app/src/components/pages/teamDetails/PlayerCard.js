import { useDispatch } from "react-redux";
import { removeTeamMember } from "../../../store/teams";

const PlayerCard = ({ team, player, setRemovePlayer }) => {
    const dispatch = useDispatch();

    const handleKick = () => {
        dispatch(removeTeamMember(player.id, team.id)).then(() => setRemovePlayer(prevState => !prevState))
    }

    return (
        <div>
            <span>{player.username}</span>
            {team.owner_id !== player.id && (

            <button onClick={handleKick}>Kick</button>
            )}
        </div>
    )
};

export default PlayerCard;
