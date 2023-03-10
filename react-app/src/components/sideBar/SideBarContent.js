import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../store/session";
import styles from '../cssModules/SideBarContent.module.css'

const SideBarContent = ({ user, setShowModal }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleDisputedMatches = () => {
        setShowModal(false)
        history.push('/my-disputed-matches')
    }

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
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        person
                    </span>
                    <span>Profile</span>
                </div>
                <div onClick={handleMatches} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        schedule
                    </span>
                    <span>Matches</span>
                </div>
                <div onClick={handleDisputedMatches} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        error
                    </span>
                    <span>Disputed Matches</span>
                </div>
                <div onClick={handleTeams} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        group
                    </span>
                    <span>Teams</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        folder_special
                    </span>
                    <span>Tickets</span>
                </div>
                <div className={styles.optionCardLine}></div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        account_balance_wallet
                    </span>
                    <span>Bank</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        category
                    </span>
                    <span>Purchased Items</span>
                </div>
                <div onClick={handleComingSoon} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        military_tech
                    </span>
                    <span>Prize Claims</span>
                </div>
                <div className={styles.optionCardLine}></div>
                <div onClick={onLogout} className={styles.optionCard}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        logout
                    </span>
                    <span>Sign Out</span>
                </div>
            </div>
        </div>
    )
};

export default SideBarContent;
