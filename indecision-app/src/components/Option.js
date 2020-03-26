import React from 'react'

const Option = (props) => {
    return (
        <li>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.removeOption(props.optionText)
                }}
            >
                Remove
            </button>
        </li>   
    )
}

export default Option;