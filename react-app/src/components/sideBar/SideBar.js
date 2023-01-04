import { useState } from "react";
import { SideBarModal } from "../../context/SideBarModal";
import SideBarContent from "./SideBarContent";


const SideBar = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div onClick={() => setShowModal(true)} style={{display: 'flex'}}>
            <span>
                {user.username}
            </span>
            <span className="material-symbols-outlined">
                expand_more
            </span>
        </div>
            {showModal && (
                <SideBarModal onClose={() => setShowModal(false)}>
                    <SideBarContent setShowModal={setShowModal} user={user} />
                </SideBarModal>
            )}
        </>
    )
};

export default SideBar;
