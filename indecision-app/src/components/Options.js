import React from 'react'
import Option from './Option'

export default function Options (props) {
    return (
        <main>
            {/* This way is expensive because we bind this object every time we render */}
            {/* <button onClick={this.removeAll.bind(this)}>Remove All</button> */}
            <button onClick={props.removeOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add some options to get start!</p>}
            <ul>
                {
                    props.options.map((option, i) => (
                        <Option 
                            key={i} 
                            optionText={option}
                            removeOption={props.removeOption}
                        />
                    ))
                }
            </ul>
        </main>
    )
}