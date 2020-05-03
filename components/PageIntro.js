import React from 'react'

const PageIntro = ({ title = '', text = [] }) => {
    return (
        <div className="text-center text-white text-lg sm:text-xl leading-relaxed">
            <h1 className="font-black text-5xl sm:text-6xl">{title}</h1>
            {text.map((t, i) => (
                <p key={t + i}>{t}</p>
            ))}
        </div>
    )
}

export default PageIntro
