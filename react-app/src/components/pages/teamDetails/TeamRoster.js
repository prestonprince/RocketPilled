import PlayerCard from "./PlayerCard";
import styles from '../../cssModules/TeamRoster.module.css'

const TeamRoster = ({ team, setRemovePlayer }) => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>ROSTER</span>
                <span className={styles.detail}>Roster does not include pending player invites.</span>
            </div>
            <div className={styles.cardContainer}>
                {team.members.map(player => <PlayerCard key={player.id} player={player} team={team} setRemovePlayer={setRemovePlayer} />)}
            </div>
        </div>
    )
};

export default TeamRoster;
