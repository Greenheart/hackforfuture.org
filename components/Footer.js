import React from 'react'

const Footer = ({ className = '' }) => {
    return (
        <footer className={`flex justify-center p-4 text-white ${className}`}>
            <div>
                <span className="mr-10">
                    &copy; {new Date().getFullYear()} Hack for Future
                </span>
                <a href="mailto:hackforfuture@gmail.com">
                    hackforfuture@gmail.com
                </a>
            </div>
        </footer>
    )
}

export default Footer
