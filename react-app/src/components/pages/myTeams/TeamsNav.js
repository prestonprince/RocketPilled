import styles from "../../cssModules/TeamsNav.module.css"

const TeamsNav = ({ setTeams, user }) => {
    const soloClick = () => {
        setTeams(user.Solo)
    };

    const duoClick = () => {
        setTeams(user.Duo)
    };

    const squadClick = () => {
        setTeams(user.Squad)
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span onClick={soloClick}>Solo</span>
            </div>
            <div className={styles.title}>
                <span onClick={duoClick}>Duo</span>
            </div>
            <div className={styles.title}>
                <span onClick={squadClick}>Squad</span>
            </div>
        </div>
    )
};

export default TeamsNav;
