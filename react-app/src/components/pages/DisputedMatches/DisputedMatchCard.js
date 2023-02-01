import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useMatchId } from '../../../context/Match'
import styles from '../../cssModules/MyMatchCard.module.css'

function DisputedMatchCard({ userTeams, match }) {
    const [hasSubmittedTicket, setHasSubmittedTicket] = useState(false)
    const { setMatchId }  = useMatchId()
    const history = useHistory()

    const userTeamsIds = userTeams.map(team => team.id)
    const opp = match.teams.find(team => !userTeamsIds.includes(team.id))
    const userTeam = match.teams.find(team => userTeamsIds.includes(team.id))

    const userTeamMemberIds = userTeam.members.map(member => member.id)

    useEffect(() => {
        for (const ticket of match.tickets) {
            if (userTeamMemberIds.includes(ticket.user_id)) setHasSubmittedTicket(true)
        };
    }, [userTeamMemberIds, match.tickets]);

    function handleTicketClick() {
        setMatchId(match.id)
        history.push('/tickets/new')
    }

    return (
    <>
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
                <span className={styles.name}>ROCKET LEAGUE {match.type.toUpperCase()}</span>
                <span className={styles.rl}>Rocket League | Cross-Platform</span>
                <span className={styles.vs}>VS
                    {opp ? (
                        <span> {opp.name}</span>
                    ):
                        <span> TBD</span>
                    }
                </span>
                <div className={styles.footer}>
                    <span>{match.map}</span>
                    <span>|</span>
                    <span>{match.status}</span>
                </div>
            </div>
            {!hasSubmittedTicket && (
                <div className={styles.btnContainer}>
                    <button onClick={handleTicketClick} className={styles.btn}>Submit Ticket</button>
                </div>
            )}
        </div>
    </>
      
    )
};

export default DisputedMatchCard
