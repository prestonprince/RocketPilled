import { useHistory } from "react-router-dom";
import { useEffect } from 'react'

import styles from '../../cssModules/MyTeamCard.module.css'

const MyTeamCard = ({ team, click }) => {
    const history = useHistory()

    useEffect(() => {}, [click])

    const handleTeamClick = (team) => {
        history.push(`/teams/${team.type}/${team.id}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.pic_container}>
                <img
                    className={styles.pic}
                    src="https://rocketleague.media.zestyio.com/rl_cross-play_asset_no-text.jpg"
                    alt="rlpic"
                >
                </img>
            </div>
            <div className={styles.infoContainer}>
                <span className={styles.name}>{team.name}</span>
                <span className={styles.rl}>Rocket League | Cross-Platform</span>
                <span className={styles.type}>{team.type}</span>
                <button className={styles.btn} onClick={() => handleTeamClick(team)}>manage</button>
            </div>
        </div>
    )
};

export default MyTeamCard;
