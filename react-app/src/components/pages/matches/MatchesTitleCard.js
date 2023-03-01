import styles from '../../cssModules/MatchesTitleCard.module.css'

const MatchesTitleCard = () => {
    return (
        <div className={styles.bigContainer}>
            <div className={styles.container}>
                <div className={styles.bigText}>
                    <h2>XP MATCHES</h2>
                </div>
                {/* <div className={styles.smallText}>
                    <span>
                        Join up and earn xp with every win. Play when and how you want.
                    </span>
                </div> */}
            </div>
        </div>
    )
};

export default MatchesTitleCard;
