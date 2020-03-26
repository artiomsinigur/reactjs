import React from 'react'

export default function Header (props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>{props.randomOption}</p>
        </header>
    )
}
Header.defaultProps = { title: 'Default App Indecision' }