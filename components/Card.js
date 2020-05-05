import React from 'react'
import Link from 'next/link'

const Card = ({ title = '', href = '', text = '' }) =>
    href.startsWith('http') ? (
        <a href={href} className="card bg-white rounded-lg p-5 shadow-lg">
            <h2 className="font-black text-blue">{title} &rarr;</h2>
            <p>{text}</p>
        </a>
    ) : (
        <Link href={href}>
            <a className="card bg-white rounded-lg p-5 shadow-lg">
                <h2 className="font-black text-blue">{title} &rarr;</h2>
                <p>{text}</p>
            </a>
        </Link>
    )

export default Card
