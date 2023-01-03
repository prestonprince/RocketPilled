import { useEffect } from "react";


const CancelMatchPop = ({ setShowModal, setOpen }) => {
    
    const closeModal = () => {
        setOpen(false)
        setTimeout(() => {
            setShowModal(false)
        }, 100)
    };

    useEffect(() => {
        setTimeout(closeModal, 2500)
    })


    return (
        <span>Match Cancelled</span>
    )
};

export default CancelMatchPop;
