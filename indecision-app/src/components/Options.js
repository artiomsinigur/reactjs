import React from 'react'
import Option from './Option'

export default function Options (props) {
    return (
        <div>
            {/* This way is expensive because we bind this object every time we render */}
            {/* <button onClick={this.removeAll.bind(this)}>Remove All</button> */}
            <header className='options__header'>
                <h2 className='options__title'>Your Options</h2>
                <button className='btn btn--link' onClick={props.removeOptions}>Remove All</button>
            </header>
            <div className='options__body'>
                {props.options.length === 0 && <p className='msg-empty'>Please add some options to get start!</p>}
                <ol className='options__list'>
                    {
                        props.options.map((option, i) => (
                            <Option 
                                key={i}
                                optionText={option}
                                removeOption={props.removeOption}
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}