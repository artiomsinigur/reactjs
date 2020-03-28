import React from 'react'
import ReactModal from 'react-modal'

const OptionModal = (props) => (
    <ReactModal
        isOpen={props.showModal}
        contentLabel={'Selected Option'}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        overlayClassName={'modal__overlay'}
        className={'modal__content'}
        // shouldCloseOnOverlayClick={false}
        // shouldCloseOnEsc={true}
    >
        <h3>Hello</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.closeModal}>Okey</button>
    </ReactModal>
)

export default OptionModal