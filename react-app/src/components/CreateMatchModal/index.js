import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import CreateMatchForm from "../forms/CreateMatchForm";
import styles from "../cssModules/CreateMatchButton.module.css"

const CreateMatchModal = ({ team }) => {
    const history = useHistory()
    const [showMatchModal, setShowMatchModal] = useState(false);
    const user = useSelector(state => state.session.user)
    
    // returns true if a team does not have a full roster
    const isIncomplete = (team) => {
        const type = team.type;
        
        if (type === 'Duo') return !(team.members.length === 2)
        else if (type === 'Squad') return !(team.members.length === 3)
        else return false
    };
    
    let userTeams;
    let incompleteRoster;
    if (user) {
        userTeams = [
            ...Object.values(user.Solo),
            ...Object.values(user.Duo),
            ...Object.values(user.Squad)
        ]
        incompleteRoster = userTeams.find(team => isIncomplete(team))
    }

    const handleClick = () => {
        if (!user || !userTeams.length || incompleteRoster) {
            window.alert('You must create a team with a full roster to post a match');
            history.push('/my-teams')
            return;
        }
        setShowMatchModal(true)
    };

    return (
        <>
            <button className={styles.button} onClick={handleClick}>
                Create Match
            </button>
            {user && showMatchModal && (
                <Modal onClose={() => setShowMatchModal(false)}>
                    <CreateMatchForm setShowMatchModal={setShowMatchModal} />
                </Modal>
            )}
        </>
    )
};

export default CreateMatchModal;
