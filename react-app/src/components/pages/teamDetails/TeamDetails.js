import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { deleteTeam, removeTeamMember } from "../../../store/teams";
import TeamBar from "./TeamBar";
import TeamRoster from "./TeamRoster";
import TeamMatches from "./TeamMatches";
import ManageRosterModal from "../../ManageRosterModal";

import styles from '../../cssModules/TeamDetails.module.css'

const TeamDetails = () => {
    const { id, type } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const teams = useSelector(state => state.teams)
    const user = useSelector(state => state.session.user)
    const [removePlayer, setRemovePlayer] = useState(false)

    const team = teams[type][id]
    const userTeams = [
        ...Object.values(user.Solo),
        ...Object.values(user.Duo),
        ...Object.values(user.Squad)
    ]

    const userTeamsIds = userTeams.map(team => team.id)

    const isUserTeam = userTeamsIds.find(id => id === team.id)


    useEffect(() => {}, [removePlayer])

    const handleDisband = (team) => {
        dispatch(deleteTeam(team)).then(() => {
            history.push('/my-teams')
        })
    }

    const teamSizeCheck = (team) => {
        if (
            (type === 'Duo' && team.members.length < 2) ||
            (type === 'Squad' && team.members.length < 3)
            ) return true;
            else return false;
    }

    const handleLeave = (team) => {
        dispatch(removeTeamMember(user.id, team)).then(() => {
            history.push('/my-teams')
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.leftSide}>
                        <div className={styles.picContainer}>
                            <span style={{fontSize: "3.2rem"}} class='material-symbols-outlined'>
                                        list
                            </span>                    
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <h2 className={styles.teamName}>{team.name}</h2>
                        <span className={styles.time}>EST. 10/28/22</span>
                        <div className={styles.info}>
                            <div className={styles.rl}>
                                <span class="material-symbols-outlined">
                                    shuffle
                                </span>
                                <span>Rocket League</span>
                            </div>
                            <div>|</div>
                            <div className={styles.rl}>
                                <span class="material-symbols-outlined">
                                    list
                                </span>
                                <span>Global {team.type} Ladder</span>
                            </div>
                        </div>
                    </div>
                </div>
                {user.id === team.owner_id && (
                    <div className={styles.buttons}>
                        {(type !== 'Solo' && teamSizeCheck(team)) && (
                            <ManageRosterModal team={team} />
                        )}
                        <button className={styles.btn} onClick={() => handleDisband(team)}>Disband</button>
                    </div>
                )}
                {isUserTeam && user.id !== team.owner_id && (
                    <div>
                        <button className={styles.btn} onClick={() => handleLeave(team)}>Leave Team</button>
                    </div>
                )}
                
            </div>
            <div>
                <TeamBar team={team}/>
            </div>
            <div className={styles.teamInfoContainer}>
                <TeamRoster setRemovePlayer={setRemovePlayer} team={team} />
                <TeamMatches team={team} />
            </div>
        </div>
    )
};

export default TeamDetails;
