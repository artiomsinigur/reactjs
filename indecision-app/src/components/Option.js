import React from 'react'

const Option = (props) => {
    return (
        <li className='options__item'>
            <p>{props.optionText}</p>
            <button
                className='btn btn--link'
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