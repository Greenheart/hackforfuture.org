import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const Card = ({ title = '', href = '', text = '' }) => (
    <Link href={href}>
        <a className="card bg-white rounded-lg p-5 shadow-lg">
            <h2 className="font-black text-blue">{title} &rarr;</h2>
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

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-20 mb-20">
                <Card
                    title="Our community"
                    href="/community"
                    text="Hack for Future is an international network working on projects that combine climate, technology and communication. We collaborate both on physical events and online. Welcome to join us!"
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
