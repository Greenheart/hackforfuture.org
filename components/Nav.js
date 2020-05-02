import React from 'react'
import Link from 'next/link'

const links = [
    { href: 'https://github.com/hackforfuture', label: 'GitHub' },
].map((link) => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <img
                        src="images/hackforfuture-logo-banner.png"
                        alt="Hack for Future logo"
                        width="200"
                    />
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
            nav {
                text-align: center;
            }
            ul {
                display: flex;
                justify-content: space-between;
                margin: 0;
                padding: 1rem;
            }
            li {
                display: flex;
                padding: 6px 8px;
            }
            a {
                color: var(--blue);
                text-decoration: none;
                font-size: 13px;
            }
        `}</style>
    </nav>
)

export default Nav
