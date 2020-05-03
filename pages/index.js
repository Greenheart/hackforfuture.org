import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'
import Card from '../components/Card'

const Home = () => (
    <Layout>
        <PageIntro
            title="Hack for Future"
            text={[
                'A creative community, working together to raise awareness about the climate crisis and inspire action.',
                'Join our next climate hackathon on May 9th!',
            ]}
        />

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
    </Layout>
)

export default Home
