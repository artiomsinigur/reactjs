import React from 'react'

export default function Header (props) {
    return (
        <header className='page-header'>
            <div className='container'>
                <h1 className='page-header__title'>{props.title}</h1>
                <h2 className='page-header__subtitle'>{props.subTitle}</h2>
            </div>
        </header>
    )
}
Header.defaultProps = { title: 'Default App Indecision' }