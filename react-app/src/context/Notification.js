import { createContext, useContext, useState } from 'react';

export const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export default function NotificationProvider({ children }) {
    const [content, setContent] = useState('')
    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <NotificationContext.Provider
            value={{
                content, setContent,
                open, setOpen,
                showModal, setShowModal
            }}
        >
            {children}
        </NotificationContext.Provider>
    )
};
