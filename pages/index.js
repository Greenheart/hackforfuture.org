import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const Home = () => (
    <Layout>
        <div>
            <div className="text-center text-white">
                <h1 className="font-black text-4xl xs:text-5xl sm:text-6xl">
                    Hack for Future
                </h1>
                <p>
                    A creative community, working together to raise awareness
                    about the climate crisis and inspire action.
                </p>
                <p>Join our next climate hackathon on May 9th!</p>
            </div>

            <div className="">
                <Link href="/community">
                    <a className="">
                        <h3>Our community &rarr;</h3>
                        <p>
                            Hack for Future is a international network working
                            on projects that combine climate, technology and
                            communication. We collaborate both on events and
                            online. Welcome to join us!
                        </p>
                    </a>
                </Link>
                <Link href="/hackathons">
                    <a className="">
                        <h3>Our hackathons &rarr;</h3>
                        <p>
                            We arrange regular hackathons with local partners
                            around the world. Learn what makes these events
                            special - and find one near you.
                        </p>
                    </a>
                </Link>
                <Link href="/join">
                    <a className="">
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
    </Layout>
)

export default Home
