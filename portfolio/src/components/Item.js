import React from 'react'

const Item = ({ match }) => {
    return (
        <p>Item with ID: {match.params.id}</p>
    )
}

export default Item