import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import CreateMatchModal from "../../CreateMatchModal";
import styles from "../../cssModules/MatchesNav.module.css"

const MatchesNav = ({ setType, type }) => {
    const history = useHistory()

    useEffect(() => {
        setType('all')
    }, [])

    const teamsButton = () => {
        history.push('/teams')
    }

    const handleType = (type, e) => {
        e.stopPropagation()
        setType(type)
    };

    return (
        <div className={styles.container}>
            <div className={styles.typeBox}>
                {type === 'all' ? (
                    <div onClick={(e) => handleType('all', e)} className={styles.typeCardActive}>
                        <span>ALL</span>
                    </div>
                ) :
                    <div onClick={(e) => handleType('all', e)} className={styles.typeCard}>
                        <span>ALL</span>
                    </div>
                }
                {type === 'Solo' ? (
                    <div onClick={(e) => handleType('Solo', e)} className={styles.typeCardActive}>
                        <span>SOLO</span>
                    </div>
                ) : 
                    <div onClick={(e) => handleType('Solo', e)} className={styles.typeCard}>
                        <span>SOLO</span>
                    </div>
                }
                {type === 'Duo' ? (
                    <div onClick={(e) => handleType('Duo', e)} className={styles.typeCardActive}>
                        <span>DUO</span>
                    </div>
                ) : 
                    <div onClick={(e) => handleType('Duo', e)} className={styles.typeCard}>
                        <span>DUO</span>
                    </div>
                }
                {type === 'Squad' ? (
                    <div onClick={(e) => handleType('Squad', e)} className={styles.typeCardActive}>
                        <span>SQUAD</span>
                    </div>
                ) : 
                    <div onClick={(e) => handleType('Squad', e)} className={styles.typeCard}>
                        <span>SQUAD</span>
                    </div>
                }
            </div>
            <div className={styles.buttons}>
                <div className={styles.teams} onClick={teamsButton}>
                    <span className={styles.groups} class="material-symbols-outlined">
                        groups
                    </span>
                    <span>Teams</span>
                </div>
                <div className={styles.createMatch}>
                    <CreateMatchModal />
                </div>
            </div>
        </div>
    )
};

export default MatchesNav;
