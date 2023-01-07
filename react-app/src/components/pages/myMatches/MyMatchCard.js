import { useDispatch, useSelector } from 'react-redux';
import { cancelMatch } from '../../../store/matches';
import { useNotification } from "../../../context/Notification";
import styles from '../../cssModules/MyMatchCard.module.css'

const MyMatchCard = ({ userTeams, match }) => {
    const userTeamsIds = userTeams.map(team => team.id)
    const opp = match.teams.find(team => !userTeamsIds.includes(team.id));
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
        </div>
    )
};

export default MyMatchCard;
