import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../store/session";
import styles from '../cssModules/SideBarContent.module.css'

const SideBarContent = ({ user, setShowModal }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleComingSoon = () => {
        setShowModal(false)
        history.push('/coming-soon')
    }

    const handleTeams = () => {
        setShowModal(false)
        history.push('/my-teams')
    }

    const onLogout = async (e) => {
        setShowModal(false)
        await dispatch(logout());
        history.push('/')
      };

    const handleMatches = () => {
        setShowModal(false)
        history.push('/my-matches')
    }

    return (
        <div styles={styles.container}>
            <div className={styles.header}>
                <span>{user.username}</span>
            </div>
            <div className={styles.options}>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    <span>Profile</span>
                </div>
                <div onClick={handleMatches} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        schedule
                    </span>
                    <span>Matches</span>
                </div>
                <div onClick={handleTeams} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        group
                    </span>
                    <span>Teams</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        group_add
                    </span>
                    <span>Team Invites</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        folder_special
                    </span>
                    <span>Tickets</span>
                </div>
                <div className={styles.optionCardLine}></div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        account_balance_wallet
                    </span>
                    <span>Bank</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        category
                    </span>
                    <span>Purchased Items</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        military_tech
                    </span>
                    <span>Prize Claims</span>
                </div>
                <div className={styles.optionCardLine}></div>
                <div onClick={onLogout} className={styles.optionCard}>
                    <span class="material-symbols-outlined">
                        logout
                    </span>
                    <span>Sign Out</span>
                </div>
            </div>
        </div>
    )
};

export default SideBarContent;
