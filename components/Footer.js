import React from 'react'

const Footer = ({ className = '' }) => {
    return (
        <footer className={`flex justify-center p-4 ${className}`}>
            <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-1 max-w-xl"
                style={{ justifyItems: 'center' }}>
                <span>&copy; {new Date().getFullYear()} Hack for Future</span>
                <span>&#9669; &#9672; &#9659;</span>
                <a href="mailto:hackforfuture@gmail.com">
                    hackforfuture@gmail.com
                </a>
            </div>
        </footer>
    )
}

export default Footer
