import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import ManageRosterForm from "./ManageRosterForm";
import { getAllUsers } from "../../store/session";
import styles from '../cssModules/TeamDetails.module.css'

const ManageRosterModal = ({ team }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(getAllUsers())
        }
    }, [dispatch])

    const handleClick = () => {
        dispatch(getAllUsers()).then(() => setShowModal(true))
    }

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>
                Add Teammates
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ManageRosterForm team={team} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
};

export default ManageRosterModal;
