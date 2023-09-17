import React from 'react';
import './Modal.css';
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
    return (
        <>
            <BackDrop show={props.show} clicked={props.closed}/>
            <div
                className="Modal"
                 style={{
                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0',
                     borderRadius: '24px'
                 }}
            >
                {props.children}
            </div>
        </>
    );
};

export default Modal;