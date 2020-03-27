import React from 'react'
import ReactModal from 'react-modal'

const OptionModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel={'Selected Option'}
        ariaHideApp={false}
        onRequestClose={props.closeModal}
        // shouldCloseOnOverlayClick={false}
        // shouldCloseOnEsc={true}
    >
        <h3>Hello</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.closeModal}>Okey</button>
    </ReactModal>
)

export default OptionModal