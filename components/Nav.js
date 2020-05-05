import React from 'react'
import Link from 'next/link'

const links = [{ href: 'https://discord.gg/9MFrxB8', label: 'Discord' }].map(
    (link) => {
        link.key = `nav-link-${link.href}-${link.label}`
        return link
    }
)

const Nav = ({ className = '' }) => (
    <nav
        className={`flex justify-between w-full items-center text-white ${className}`}>
        <ul className="flex justify-between p-4 w-full">
            <li>
                <Link href="/">
                    <a>
                        <img
                            src="images/hackforfuture-logo-white-1350x225.png"
                            alt="Hack for Future logo"
                            width="200"
                        />
                    </a>
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li key={key} className="flex items-center">
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>
    </nav>
)

export default Nav
