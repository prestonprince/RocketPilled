import { useState } from "react";

import { Modal } from "../../context/Modal";
import styles from '../cssModules/MyMatchCard.module.css';
import ReportCard from "./ReportCard";

function ViewReportModal({ opp, userTeam, match }) {
    const [showReportModal, setShowReportModal] = useState(false)

    return (
        <>
            <button className={styles.btn} onClick={() => {setShowReportModal(true)}}>
                View My Report
            </button>
            {showReportModal && (
                <Modal onClose={() => setShowReportModal(false)}>
                    <ReportCard opp={opp} userTeam={userTeam} match={match} />
                </Modal>
            )}
        </>
    )
};

export default ViewReportModal;
