import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        className="modal"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <div className="modal-content">{props.selectedOption}</div>}
        <button className="button" onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;