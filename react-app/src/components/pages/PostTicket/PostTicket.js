import { useSelector } from 'react-redux';
import { useState } from 'react';

import { useMatchId } from '../../../context/Match';
import styles from './PostTicket.module.css';

function PostTicket() {
    const [ screenshotLink, setScreenshotLink ] = useState('');
    const [ description, setDescription ] = useState('')

    const { matchId, setMatchId } = useMatchId()
    const user = useSelector(state => state.session.user)

    return (
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <span><span className={styles.my}>SUBMIT</span> DISPUTE TICKET</span>
            </div>
            <div className={styles.formContainer}>
                <form>
                    <label htmlFor=''></label>
                </form>
            </div>
        </div>
        </>
    )
};

export default PostTicket;
