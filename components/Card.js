import React from 'react'
import Link from 'next/Link'

const Card = ({ title = '', href = '', text = '' }) => (
    <Link href={href}>
        <a className="card bg-white rounded-lg p-5 shadow-lg">
            <h2 className="font-black text-blue">{title} &rarr;</h2>
            <p>{text}</p>
        </a>
    </Link>
)

export default Card
