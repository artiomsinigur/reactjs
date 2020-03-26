import React from 'react'

export default function Action (props) {
    return (
        <button 
            onClick={props.pickRandomOption} 
            disabled={props.hasOptions}
        >
            Make a decision
        </button>
    )
}