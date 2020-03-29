import React from 'react'

const Edit = (props) => {
    console.log(props)
    return (
        <div>This is from edit page with id: {props.match.params.id}</div>
    )
}

export default Edit