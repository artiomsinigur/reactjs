import React from 'react'

export default function ExpenseListItem({ desc, amount, createdAt }) {
    return (
        <tr>
            <th>{desc}</th>
            <td>{amount}</td>
            <td>{createdAt}</td>
        </tr>
    )
}