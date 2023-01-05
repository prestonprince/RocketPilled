import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useNotification } from "../../../context/Notification";

import { acceptMatch, cancelMatch } from "../../../store/matches";
import styles from '../../cssModules/MatchCard.module.css'

const MatchCard = ({ match }) => {
    const [isUserMatch, setIsUserMatch] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const { setContent, setShowModal, setOpen } = useNotification()
    const user = useSelector(state => state.session.user)
    const matchTeamIds = match.teams.map(team => team.id)
    const matchTeamOwnerIds = match.teams.map(team => team.owner_id);

    let userTeams;
    if (user) {
        userTeams = Object.values(user[match.type]);
    };

    useEffect(() => {
        if (user) {
            for (const team of userTeams) {
                if (matchTeamIds.includes(team.id)) {
                    setIsUserMatch(true)
                }
            }
        }
    }, [])

    const handleCancel = () => {
        dispatch(cancelMatch(match, matchTeamIds[0])).then(() => {
            setContent('Match Canceled')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 100)
        })
    }

    const handleAccept = () => {
        const team = Object.values(user[match.type])[0];

        if (!team ||
            (team.type === 'Duo' && team.members.length < 2) ||
            (team.type === 'Squad' && team.members.length < 3)) {
            alert('You must have a valid team and full roster to accept this match');
            history.push('/my-teams');
            return;
        };
        dispatch(acceptMatch(team.id, match.id)).then(() => {
            setContent('Match Accepted')
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
            history.push('/my-matches')
        })
    };

    let size;
    if (match.type === 'Solo') size = '1v1';
    if (match.type === 'Duo') size = '2v2';
    if (match.type === 'Squad') size = '3v3';

    return (
        <div className={styles.container}>
            <div className={styles.pic_container}>
                <img
                className={styles.pic}
                src="https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/3080765-rocketleague.jpg"
                alt="rlpic"
                ></img>
            </div>
            <span className={styles.xp}>XP</span>
            <span>{size}</span>
            <span>Available Now</span>
            {(user && isUserMatch) && matchTeamOwnerIds.includes(user.id) && (
                <button className={styles.button} onClick={handleCancel}>Cancel</button>
            )}
            {user && !isUserMatch && (
                <button className={styles.button} onClick={handleAccept}>Accept</button>
            )}
            {!user && (
                <span className={styles.nothing}> </span>
            )}
        </div>
    )
};

export default MatchCard;
