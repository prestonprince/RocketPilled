import { useEffect } from "react";
import { useNotification } from "../../../context/Notification";


const AcceptMatchPop = () => {
    const { setShowModal, setOpen, content } = useNotification()
    
    const closeModal = () => {
        setOpen(false)
        setTimeout(() => {
            setShowModal(false)
        }, 100)
    };

    useEffect(() => {
        setTimeout(closeModal, 3500)
    })


    return (
        <span>{content}</span>
    )
};

export default AcceptMatchPop
