import { useState } from 'react';
import styles from '../cssModules/TeamOptions.module.css'

const TeamCard = ({ matchType, matchTeamId, setMatchTeamId, team }) => {

    const handleClick = () => {
        setMatchTeamId(team.id)
    }

    return (
        <>
        {team ? (
            <div className={matchTeamId === team.id ? styles.cardContainerActive : styles.cardContainer} onClick={handleClick}>
                <span>{team.name}</span>
            </div>

        ):
            <div>No {matchType} Teams</div>
        }
        </>
    )
};

export default TeamCard;
