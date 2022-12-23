import { useHistory } from "react-router-dom";

import styles from '../cssModules/SideBarContent.module.css'

const SideBarContent = ({ user, setShowModal }) => {
    const history = useHistory()

    const handleTeams = () => {
        setShowModal(false)
        history.push('/my-teams')
    }

    return (
        <div>
            <div>
                <span>{user.username}</span>
            </div>
            <div styles={styles.container}>
                <span>Matches</span>
                <span className={styles.teams} onClick={handleTeams}>Teams</span>
                <span>Sign Out</span>
            </div>
        </div>
    )
};

export default SideBarContent;
