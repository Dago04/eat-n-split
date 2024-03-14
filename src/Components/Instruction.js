import React from 'react'
import '../index.css'

export default function Instruction({ title, text }) {
    return (
        <li className='instruction-item'>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    )
}
