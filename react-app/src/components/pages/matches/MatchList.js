import MatchCard from "./MatchCard";
import styles from '../../cssModules/MatchList.module.css'

const MatchList = ({ setShowModal, setOpen, matches }) => {
    
    return (
        <>
        {matches.length > 0 ? (
            <div className={styles.bigContainer}>
                    <div className={styles.header}>
                        <div className={styles.game}>
                            <span>GAME</span>
                        </div>
                        <div className={styles.entry}>
                            <span>ENTRY</span>
                        </div>
                        <div className={styles.size}>
                            <span>TEAM SIZE</span>
                        </div>
                        <div className={styles.starting}>
                            <span>STARTING</span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                <div className={styles.container}>
                    {matches.map(match => (
                        <MatchCard setShowModal={setShowModal} setOpen={setOpen} key={match.id} match={match}/>
                    ))}
                </div>
            </div>
        ):
            <span>No matches posted</span>
        }
        </>
    )
};

export default MatchList;
