import MyMatchCard from "./MyMatchCard";
import styles from '../../cssModules/MyMatchList.module.css'

const MyMatchList = ({ userTeams, matches }) => {

    return (
        <div className={styles.container}>
            {matches.map(match => (
                <MyMatchCard key={match.id} userTeams={userTeams} match={match}/>
            ))}
        </div>
    )
};

export default MyMatchList;
