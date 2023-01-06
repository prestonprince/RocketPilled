import { useHistory } from "react-router-dom";
import styles from './cssModules/NotFound.module.css'

const NotFound = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/')
    }

    return (
        <div className={styles.container}>
            <span className={styles.home} onClick={handleClick}>Go Back Home</span>
            <div className={styles.gifContainer}>
                <img className={styles.gif} src="https://media.giphy.com/media/DnMMGxEvniha7CvASq/giphy.gif"></img>
            </div>
        </div>
    )
};

export default NotFound;
