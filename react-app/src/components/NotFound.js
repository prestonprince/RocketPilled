import { useHistory } from "react-router-dom";
import styles from './cssModules/NotFound.module.css'

const NotFound = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.errorBar}></div>
            <span className={styles.error}>404 ERROR</span>
            <span className={styles.dead}>Dead link is dead. The link you followed either doesn't or has been misplaced. Please check the spelling and try again.</span>
            <button className={styles.home} onClick={handleClick}>Continue</button>
        </div>
    )
};

export default NotFound;
