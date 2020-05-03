import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const Card = ({ title = '', href = '', text = '' }) => (
    <Link href={href}>
        <a className="bg-white rounded-lg p-4">
            <h3>{title} &rarr;</h3>
            <p>{text}</p>
        </a>
    </Link>
)

const Home = () => (
    <Layout>
        <div>
            <div className="text-center text-white leading-relaxed">
                <h1 className="font-black text-4xl xs:text-5xl sm:text-6xl">
                    Hack for Future
                </h1>
                <p>
                    A creative community, working together to raise awareness
                    about the climate crisis and inspire action.
                </p>
                <p>Join our next climate hackathon on May 9th!</p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-20 mb-20">
                <Card
                    title="Community"
                    href="/community"
                    text="Hack for Future is a international network working on projects that combine climate, technology and communication. We collaborate both on events and online. Welcome to join us!"
                />
                <Card
                    title="Climate hackathons"
                    href="/hackathons"
                    text="We arrange regular hackathons with local partners around the world. Learn what makes these events special - and find one near you."
                />
                <Card
                    title="Welcome to join us!"
                    href="/join"
                    text="Want to bring the hackathon spirit to your local area? Read more about how we'll help you get started organizing your own event."
                />
            </div>
        </div>
    </Layout>
)

export default Home
