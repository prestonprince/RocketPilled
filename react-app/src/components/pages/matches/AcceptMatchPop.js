import { useEffect, useState } from "react";


const AcceptMatchPop = ({ setShowModal, setOpen }) => {
    
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
        <span>Match Accepted</span>
    )
};

export default AcceptMatchPop
