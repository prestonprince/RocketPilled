import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import ManageRosterForm from "./ManageRosterForm";
import { getAllUsers } from "../../store/session";
import styles from '../cssModules/TeamDetails.module.css'

const ManageRosterModal = ({ team }) => {
    const [showRosterModal, setShowRosterModal] = useState(false);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     return () => {
    //         dispatch(getAllUsers())
    //     }
    // }, [dispatch])

    const handleClick = () => {
        setShowRosterModal(true)
    }

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>
                Add Teammates
            </button>
            {showRosterModal && (
                <Modal onClose={() => setShowRosterModal(false)}>
                    <ManageRosterForm team={team} setShowRosterModal={setShowRosterModal} />
                </Modal>
            )}
        </>
    )
};

export default ManageRosterModal;
