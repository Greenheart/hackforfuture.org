import React from 'react'

const Footer = () => {
    return (
        <footer>
            <a href="mailto:hackforfuture@gmail.com">hackforfuture@gmail.com</a>
            <style jsx>{`
                footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100vw;
                    min-height: 6rem;
                    margin-top: 4rem;
                    background: #fafafa;
                }

                a {
                    color: #067df7;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </footer>
    )
}

export default Footer
