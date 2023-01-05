import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./AcceptMatch.css";
import { useNotification } from "./Notification";

const AcceptMatchContext = React.createContext();

export function AcceptMatchModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <AcceptMatchContext.Provider value={value}>{children}</AcceptMatchContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function AcceptMatchModal({ onClose, children }) {
  const { open } = useNotification()
  const modalNode = useContext(AcceptMatchContext);
  if (!modalNode) return null;

  if (open) {
    return ReactDOM.createPortal(
      <div id="AcceptMatchModal" className="open">
        <div id="AcceptMatchModal-background" onClick={onClose} />
        <div id="AcceptMatchModal-content">{children}</div>
      </div>,
    modalNode
    )
  }


  return ReactDOM.createPortal(
    <div id="AcceptMatchModal">
      <div id="AcceptMatchModal-background" onClick={onClose} />
      <div id="AcceptMatchModal-content">{children}</div>
    </div>,
    modalNode
  );
}
