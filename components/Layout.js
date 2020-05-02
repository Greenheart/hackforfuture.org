import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ title, children }) => {
    return (
        <div className="flex flex-col items-center bg-gradient-fullpage min-w-screen min-h-screen">
            <Head>
                <title>
                    {title ? title + ' | Hack for Future' : 'Hack for Future'}
                </title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/rpc5jvj.css"
                />
            </Head>
            <Nav className="max-w-screen-xl" />

            <main className="container px-4 my-10">{children}</main>

            <Footer className="max-w-screen-xl" />
        </div>
    )
}

export default Layout
