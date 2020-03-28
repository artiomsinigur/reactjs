import React from 'react'

export default function Action (props) {
    return (
        <div className='action'>
            <div className='container'>
                <button
                    className='action__btn'
                    onClick={props.pickRandomOption} 
                    disabled={props.hasOptions}
                >
                    Take a decision for me.
                </button>
            </div>
        </div>
    )
}