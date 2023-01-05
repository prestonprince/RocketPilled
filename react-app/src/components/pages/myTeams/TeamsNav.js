import { useState } from "react";
import styles from "../../cssModules/TeamsNav.module.css"

const TeamsNav = ({ teams, setTeams, user }) => {
    const [type, setType] = useState('Solo')

    const soloClick = () => {
        setTeams(user.Solo)
        setType('Solo')
    };

    const duoClick = () => {
        setTeams(user.Duo)
        setType('Duo')
    };

    const squadClick = () => {
        setTeams(user.Squad)
        setType('Squad')
    };

    return (
        <div className={styles.container}>
            <div className={type === 'Solo' ? styles.titleActive : styles.title}>
                <span onClick={soloClick}>Solo</span>
            </div>
            <div className={type === 'Duo' ? styles.titleActive : styles.title}>
                <span onClick={duoClick}>Duo</span>
            </div>
            <div className={type === 'Squad' ? styles.titleActive : styles.title}>
                <span onClick={squadClick}>Squad</span>
            </div>
        </div>
    )
};

export default TeamsNav;
