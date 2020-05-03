import React from 'react'

const Footer = ({ className = '' }) => {
    return (
        <footer className={`flex justify-center p-4 ${className}`}>
            <div className="flex flex-wrap justify-evenly w-screen">
                <span className="px-8">
                    &copy; {new Date().getFullYear()} Hack for Future
                </span>
                <a href="mailto:hackforfuture@gmail.com" className="px-8">
                    hackforfuture@gmail.com
                </a>
            </div>
        </footer>
    )
}

export default Footer
