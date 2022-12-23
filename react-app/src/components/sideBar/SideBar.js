import { useState } from "react";
import { SideBarModal } from "../../context/SideBarModal";
import SideBarContent from "./SideBarContent";


const SideBar = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span onClick={() => setShowModal(true)}>
                {user.username}
            </span>
            {showModal && (
                <SideBarModal onClose={() => setShowModal(false)}>
                    <SideBarContent setShowModal={setShowModal} user={user} />
                </SideBarModal>
            )}
        </>
    )
};

export default SideBar;
