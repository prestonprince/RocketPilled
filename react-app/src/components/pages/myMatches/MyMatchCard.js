import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { cancelMatch } from '../../../store/matches';
import { useNotification } from "../../../context/Notification";
import { reportMatch } from '../../../store/matches';
import styles from '../../cssModules/MyMatchCard.module.css'

const MyMatchCard = ({ userTeams, match }) => {
    const userTeamsIds = userTeams.map(team => team.id)
    const opp = match.teams.find(team => !userTeamsIds.includes(team.id));
    const [hasReported, setHasReported] = useState(false)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const { setContent, setShowModal, setOpen } = useNotification()

    const matchTeamIds = match.teams.map(team => team.id)

    const handleCancel = () => {
        dispatch(cancelMatch(match, matchTeamIds[0])).then(() => {
            setContent('Match Canceled')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 100)
        })
    };

    const notifPopup = (content) => {
        setContent(content);
        setShowModal(true);
        setTimeout(() => {
            setOpen(true)
        }, 100)
    } 

    const userTeam = match.teams.find(team => userTeamsIds.includes(team.id));

    useEffect(() => {
        let report;
        if (match.reports.length > 0) {
            report = match.reports[0]
        };
        if (report?.team_id === userTeam.id) setHasReported(true) 
    }, [hasReported])
    
    const handleWinReport = () => {
        const report = {
            matchId: match.id,
            teamId: userTeam.id,
            isWin: true
        };

        dispatch(reportMatch(report))
        .then(() => {
            setHasReported(true)
            notifPopup('Match Reported')
        })
        .catch((err) => {
            notifPopup(err['error'])
        })   
    };

    const handleLossReport = () => {
        const report = {
            matchId: match.id,
            teamId: userTeam.id,
            isWin: false
        };

        dispatch(reportMatch(report))
        .then(() => {
            setHasReported(true)
            notifPopup('Match Reported')
        })
        .catch((err) => {
            notifPopup(err['error'])
        })   
    };

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
            {match.status === 'posted' && match.teams[0].owner_id === user.id && (
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={handleCancel}>Cancel</button>
                </div>
            )}
            {!hasReported && match.status === 'pending' && userTeam.owner_id === user.id && (
                <div className={styles.btnContainer2}>
                    <button className={styles.btn} onClick={handleWinReport}>Report Win</button>
                    <button className={styles.btn} onClick={handleLossReport}>Report Loss</button>
                </div>
            )}
        </div>
    )
};

export default MyMatchCard;
