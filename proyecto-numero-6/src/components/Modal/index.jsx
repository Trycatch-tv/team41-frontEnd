import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, modal }) {
  return ReactDOM.createPortal(
    <div className={`ModalBackground ${modal ? "show" : "notshow"}`}>
      {children}
    </div>,
    document.getElementById("Modal")
  );
}

export { Modal };
