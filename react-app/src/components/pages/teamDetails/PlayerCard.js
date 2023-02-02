import { useDispatch, useSelector } from "react-redux";
import { removeTeamMember } from "../../../store/teams";
import styles from '../../cssModules/PlayerCard.module.css'

const PlayerCard = ({ team, player, setRemovePlayer }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const handleKick = () => {
        dispatch(removeTeamMember(player.id, team)).then(() => setRemovePlayer(prevState => !prevState))
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.picContainer}>
                    <span className={`material-symbols-outlined ${styles.pic}`}>
                        person
                    </span>
                </div>
                <div className={styles.playerNamePoints}>
                    <span className={styles.name}>{player.username}</span>
                    <span className={styles.points}>XP: {player.xp_points} xp</span>
                </div>
            </div>
            <div className={styles.right}>
                {team.owner_id !== player.id && user.id === team.owner_id && (
                    <button className={styles.btn} onClick={handleKick}>Kick</button>
                )}
            </div>
        </div>
    )
};

export default PlayerCard;
