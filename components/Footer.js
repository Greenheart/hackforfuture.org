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
                    min-height: 4rem;
                    margin-top: 4rem;
                    background: var(--rich-black);
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }

                a {
                    color: var(--blue);
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
