import React from 'react'

const Footer = () => {
    return (
        <footer>
            <a href="mailto:samuel.plumppu@gmail.com">Contact</a>
            <style jsx>{`
                footer {
                    display: flex;
                    width: 100vw;
                    min-height: 4rem;
                    background: red;
                }
            `}</style>
        </footer>
    )
}

export default Footer
