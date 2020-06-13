import React from 'react'
import Link from 'next/link'

const Project = ({ title = '', href = '', text = '', emoji = '' }) => (
    <a
        href={href}
        target="_blank"
        className="card bg-white rounded-lg p-5 shadow-lg w-full">
        <h2 className="font-black text-blue flex justify-start">
            <span className="mr-2">{emoji}</span>
            <span>{title}</span>
        </h2>

        <div className="flex flex-col">
            <p>{text}</p>
        </div>
        <p className="font-normal text-right">Learn more &rarr;</p>
    </a>
)

const ProjectCard = ({ title = '', href = '', text = '', emoji = '' }) => (
    <div className="flex justify-center my-2 text-black">
        {href.startsWith('http') ? (
            <Project title={title} href={href} text={text} emoji={emoji} />
        ) : (
            <Link href={href}>
                <Project title={title} text={text} emoji={emoji} />
            </Link>
        )}
    </div>
)

export default ProjectCard
