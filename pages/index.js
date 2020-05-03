import React from 'react'

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

        <section className="text-white max-w-screen-md mx-auto my-6">
            <div className="grid grid-cols-1 gap-4">
                <h2 className="font-black text-4xl">Why?</h2>
                <p>
                    Most people have heard about the climate crisis, and how we
                    rapidly need to bend the curve of global CO<sub>2</sub>
                    e-emissions downwards. Still, few people take action.
                </p>

                <p className="font-normal">We want to change that.</p>

                <h2 className="font-black text-4xl">How?</h2>
                <p>
                    As members of Hack for Future, we believe we can achieve
                    this by improving our climate communication. But raising
                    awareness is not enough. Good climate communication inspires
                    people by starting with
                    <span className="font-normal italic"> why </span>
                    they should take action, before exploring
                    <span className="font-normal italic"> how</span>.
                </p>

                <p className="font-normal">
                    That's why we are connecting creative people from all around
                    the world so we can solve this and #HackforFuture, together.
                    Join us!
                </p>
            </div>
        </section>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 my-20">
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
