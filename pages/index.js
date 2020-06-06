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
                'Join our next climate hackathon on June 13th!',
            ]}
        />

        <section className="max-w-screen-md mx-auto my-6">
            <img
                src="/images/undraw_real_time_collaboration_c62i.svg"
                alt="Online collaboration illustration"
                className="w-48 sm:w-56 mx-auto"
            />
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

        {/* <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-20 text-black"> */}
        <div className="flex justify-center mt-20 text-black">
            <a
                href="https://forms.gle/ERXuhZhhDcRLoXgm7"
                target="_blank"
                className="card bg-white rounded-lg p-5 shadow-lg w-full max-w-2xl">
                <h2 className="font-black text-blue flex justify-start">
                    <span className="mr-2">📅</span>
                    <span>
                        Register for Hack for Future Climate Hackathon #4 &rarr;
                    </span>
                </h2>

                <div className="flex flex-col">
                    <div className="flex">
                        <span className="font-normal mr-2">When?</span>
                        <span>
                            Saturday, June 13th at 14:45-18:30 CEST (UTC+2)
                        </span>
                    </div>
                    <div className="flex">
                        <span className="font-normal mr-2">Where?</span>
                        <span>Discord</span>
                    </div>
                    <div className="flex">
                        <span className="font-normal mr-2">Who?</span>
                        <span>
                            Anyone interested in learning more about climate,
                            communication, design or technology
                        </span>
                    </div>
                </div>
                <p className="mt-4 font-normal">See you soon! 🌍✨</p>
            </a>

            {/* <Card
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
            /> */}
        </div>

        <div className="text-black text-center m-8">◅ ◈ ▻</div>

        <section className="max-w-screen-md mx-auto my-6">
            <div className="grid grid-cols-1 gap-4">
                <h2 className="font-black text-4xl">Our climate hackathons</h2>
                <p>
                    We regularly organize creative meeting places to collaborate
                    with engaged people from all around the world. Find
                    interesting ongoing projects you can contribute to - or
                    bring your own project and get support and inspiration from
                    our community.
                </p>

                <p>
                    You don't need any previous knowledge to participate. Just
                    come as you are and bring your curiosity!
                </p>

                <p className="font-normal">Let's #HackforFuture. Welcome!</p>
            </div>
        </section>
    </Layout>
)

export default Home
