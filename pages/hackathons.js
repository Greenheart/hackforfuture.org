import React from 'react'

import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'

const Hackathons = () => (
    <Layout>
        <PageIntro
            title="Climate hackathons"
            text={[
                'What is a hackathon?',
                'Who can participate?',
                'What do we create?',
                'What are some examples of projects we have worked on before?',
                'How do we use the Discord community to follow up hackathon ideas and projects?',
                'Why is open collaboration and sharing so important? Innovation. Support. International perspectives.',
                'Idea: list summaries, dates and stats about each event since the start. Or maybe link to /COMMUNITY or /EVENTS pages instead to keep this information.',
            ]}
        />
    </Layout>
)

export default Hackathons
