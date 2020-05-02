import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => (
    <div className="container">
        <Head>
            <title>Hack for Future</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/rpc5jvj.css" />
        </Head>

        <Nav />

        <div className="hero">
            <h1 className="title">Hack for Future</h1>
            <p className="description">
                A creative community, working together to raise awareness about
                the climate crisis and inspire action.
            </p>

            <p className="description">
                Next hackathon will take place May 9th.
            </p>

            <div className="row">
                <Link href="/our-community">
                    <a className="card">
                        <h3>Our community &rarr;</h3>
                        <p>
                            Hack for Future is a international network working
                            on projects that combine climate, technology and
                            communication. We collaborate both on events and
                            online. Welcome to join us!
                        </p>
                    </a>
                </Link>
                <Link href="/">
                    <a className="card">
                        <h3>Our hackathons &rarr;</h3>
                        <p>
                            We arrange regular hackathons with local partners
                            around the world. Learn what makes these events
                            special - and find one near you.
                        </p>
                    </a>
                </Link>
                <Link href="/">
                    <a className="card">
                        <h3>Organize a hackathon &rarr;</h3>
                        <p>
                            Want to bring the hackathon spirit to your local
                            area? Read more about how we'll help you get started
                            organizing your own event.
                        </p>
                    </a>
                </Link>
            </div>
        </div>

        <Footer />

        <style jsx global>{`
            :root {
                --baby-powder: #fbfef9;
                --eggshell: #f4f1de;
                --rich-black: #000d0a;
                --green: #61983b;
                --red-orange: #f86624;
                --blue: #009eea;
            }

            html {
                box-sizing: border-box;
                font-size: 20px;
                font-family: source-sans-pro, sans-serif;
                font-weight: 300;
                font-style: normal;
            }

            body {
                margin: 0;
            }
        `}</style>

        <style jsx>{`
            .container {
                background: white;
                min-height: 100vh;
            }

            .text-light {
                font-family: source-sans-pro, sans-serif;
                font-weight: 300;
            }

            .text-bold {
                font-family: source-sans-pro, sans-serif;
                font-weight: 900;
            }

            .hero {
                width: 100%;
                color: black;
            }
            .title {
                margin: 0;
                width: 100%;
                padding-top: 80px;
                line-height: 1.15;
                font-size: 3rem;
            }
            .title,
            .description {
                text-align: center;
            }
            .row {
                max-width: 1000px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .card {
                padding: 18px 18px 24px;
                width: 260px;
                text-align: left;
                text-decoration: none;
                color: black;
            }
            .card:hover {
                background: linear-gradient(25deg, var(--green), var(--blue));
            }
            .card:hover h3 {
                color: white;
            }

            .card:hover p {
                color: white;
            }

            .card h3 {
                margin: 0;
                color: var(--blue);
                font-size: 22px;
            }
            .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 16px;
                color: black;
            }
        `}</style>
    </div>
)

export default Home
