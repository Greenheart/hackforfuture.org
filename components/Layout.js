import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ title, children }) => {
    return (
        <div className="flex flex-col items-center bg-gradient-fullpage min-w-screen min-h-screen text-white text-lg sm:text-xl leading-relaxed">
            <Head>
                <title>
                    {title ? title + ' | Hack for Future' : 'Hack for Future'}
                </title>
                <link rel="icon" href="/favicon-32x32.png" />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/rpc5jvj.css"
                />
                <link rel="manifest" href="/manifest.webmanifest" />
                <meta name="theme-color" content="#009eea" />
                <link
                    rel="apple-touch-icon"
                    sizes="32x32"
                    src="images/hackforfuture-bend-the-curve-32x32.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="48x48"
                    src="images/hackforfuture-bend-the-curve-48x48.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    src="images/hackforfuture-bend-the-curve-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="96x96"
                    src="images/hackforfuture-bend-the-curve-96x96.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    src="images/hackforfuture-bend-the-curve-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    src="images/hackforfuture-bend-the-curve-192x192.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="256x256"
                    src="images/hackforfuture-bend-the-curve.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="384x384"
                    src="images/hackforfuture-bend-the-curve.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    src="images/hackforfuture-bend-the-curve.png"
                />
            </Head>

            <Nav className="max-w-screen-xl" />

            <main className="container px-4 mt-10">{children}</main>

            <Footer className="max-w-screen-xl my-24 text-black" />
        </div>
    )
}

export default Layout
