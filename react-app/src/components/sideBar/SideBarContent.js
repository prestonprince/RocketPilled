import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../store/session";
import styles from '../cssModules/SideBarContent.module.css'

const SideBarContent = ({ user, setShowModal }) => {
    const history = useHistory()
    const dispatch = useDispatch()

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
        <div>
            <div>
                <span>{user.username}</span>
            </div>
            <div styles={styles.container}>
                <span onClick={handleMatches} >Matches</span>
                <span className={styles.teams} onClick={handleTeams}>Teams</span>
                <span onClick={onLogout}>Sign Out</span>
            </div>
        </div>
    )
};

export default SideBarContent;
