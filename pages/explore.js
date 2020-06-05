import React from 'react'

import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'
import ProjectCard from '../components/ProjectCard'

const projects = [
    {
        title: 'Swipe for Future',
        href: 'https://github.com/Greenheart/swipeforfuture.com',
        emoji: '🌍📱',
        text:
            'In this gamified framework for exploring scenarios for a sustainable future, you are the president of a nation, swiping left (no) or right (yes) to decide what kind of future you want. But of course, you also have to face the consequences, giving insights into the important conversations around sustainability and the future in the real world.',
    },
]

const linkCategories = [
    {
        category: 'International',
        emoji: '🌐',
        links: [
            {
                href: 'https://www.ipcc.ch/sr15/',
                text: 'IPCC Special Report: Global Warming of 1.5˚ C',
            },
        ],
    },
    {
        category: 'Swedish',
        emoji: '🇸🇪',
        links: [
            {
                href: 'https://www.youtube.com/watch?v=MoC1JWfmUg0',
                text: 'Basfakta om klimatkrisen med Martin Hedberg',
            },
        ],
    },
]

const Explore = () => (
    <Layout>
        <PageIntro
            title="Explore"
            text={[
                'Learn more about the climate crisis - and how you can take action.',
            ]}
        />

        <section className="max-w-screen-md mx-auto my-6">
            <img
                src="/images/undraw_online_connection_6778.svg"
                alt="Online collaboration illustration"
                className="w-1/2 mx-auto p-6"
            />
            <div className="grid grid-cols-1 gap-4">
                <h2 className="font-black text-4xl">
                    Explore some of our projects
                </h2>
                <p>
                    We regularly work on projects on and between our climate
                    hackathons.
                </p>

                {projects.map((p) => (
                    <ProjectCard {...p} />
                ))}

                <p>Join us and add your project too!</p>
            </div>
        </section>

        <div className="text-black text-center m-8">◅ ◈ ▻</div>

        <section className="max-w-screen-md mx-auto my-6">
            <div className="grid grid-cols-1 gap-4">
                <h2 className="font-black text-4xl">Resources &amp; Links</h2>

                {linkCategories.map((c) => (
                    <>
                        <h3 className="font-black text-2xl">{c.category}</h3>
                        <ul>
                            {c.links.map((l) => (
                                <li>
                                    <a href={l.href} target="_blank">
                                        <span>{c.emoji}</span> {l.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
        </section>
    </Layout>
)

export default Explore
