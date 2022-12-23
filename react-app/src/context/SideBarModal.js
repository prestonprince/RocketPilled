import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./SideBarModal.css";

const SideBarModalContext = React.createContext();

export function SideBarModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <SideBarModalContext.Provider value={value}>{children}</SideBarModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function SideBarModal({ onClose, children }) {
  const modalNode = useContext(SideBarModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="sideBarModal">
      <div id="sideBarModal-background" onClick={onClose} />
      <div id="sideBarModal-content">{children}</div>
    </div>,
    modalNode
  );
}
