import { useEffect } from "react";


const AcceptMatchPop = ({ setShowModal, setOpen, content }) => {
    
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
        <span>{content}</span>
    )
};

export default AcceptMatchPop
