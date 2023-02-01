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
                    <div className={styles.descriptionContainer}>
                        <textarea
                        className={styles.description}
                        placeholder='Tell us how we can resolve this disputed match'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>
                        <span className={description.length > 250 ? styles.redCharCount : styles.charCount}>{description.length} / 250</span>
                    </div>
                    <div className={styles.screenshotLinkContainer}>
                        <input 
                        className={styles.screenshotLink}
                        type='text'
                        value={screenshotLink}
                        onChange={(e) => setScreenshotLink(e.target.value)}
                        placeholder='Link to screenshot of match score here'
                        />
                    </div>
                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
};

export default PostTicket;
