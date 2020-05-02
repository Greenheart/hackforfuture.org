import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ title, children }) => {
    return (
        <div className="container bg-gradient-green-blue mx-auto">
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
            <Nav />

            {children}

            <Footer />
        </div>
    )
}

export default Layout
