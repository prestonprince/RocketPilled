import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { postTicket } from '../../../store/session';
import { useNotification } from '../../../context/Notification'
import { useMatchId } from '../../../context/Match';
import styles from './PostTicket.module.css';

function PostTicket() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [ screenshotLink, setScreenshotLink ] = useState('');
    const [ description, setDescription ] = useState('')
    const [errors, setErrors] = useState({})

    const { matchId } = useMatchId()
    const { setOpen, setShowModal, setContent } = useNotification()
    const user = useSelector(state => state.session.user)

    const setNotif = (content) => {
        setContent(content);
        setShowModal(true);
        setTimeout(() => {
            setOpen(true)
        }, 100)
    } 

    function onSubmit(e) {
        e.preventDefault();

        setErrors({});

        if (description.length > 250) {
            setErrors({
                description: 'Description must be less than 250 characters'
            });
            return
        };

        if (description.length <= 50) {
            setErrors({
                description: 'Description must be greater than 50 characters'
            });
            return
        };

        const ticket = {
            matchId,
            userId: user.id,
            screenshotLink,
            description
        }

        dispatch(postTicket(ticket)).then(() => {
            setDescription('')
            setErrors({})
            setScreenshotLink('')
            
            setNotif('Ticket Submitted')

            history.push('/my-disputed-matches')
        }).catch((err) => {
            setNotif(err)
        })
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <span><span className={styles.my}>SUBMIT</span> DISPUTE TICKET</span>
            </div>
            <span className={styles.id}>Match id #{matchId}</span>
            <div>
                <form onSubmit={onSubmit} className={styles.formContainer}>
                    <div className={styles.descriptionContainer}>
                        <textarea
                        className={styles.description}
                        placeholder='Tell us how we can resolve this disputed match'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        >
                        </textarea>
                        <div className={styles.descriptionError}>
                            {errors.description && (
                                <span>{errors.description}</span>
                            )}
                        </div>
                        <div className={styles.countContainer}>
                            <span className={description.length > 250 || description.length <= 50 ? styles.redCharCount : styles.charCount}>{description.length} / 250</span>
                        </div>
                    </div>
                    <div className={styles.screenshotLinkContainer}>
                        <input 
                        className={styles.screenshotLink}
                        type='text'
                        value={screenshotLink}
                        onChange={(e) => setScreenshotLink(e.target.value)}
                        placeholder='Link to screenshot of match score here'
                        required
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
