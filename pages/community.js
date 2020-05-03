import React from 'react'

import Layout from '../components/Layout'
import PageIntro from '../components/PageIntro'

const Community = () => (
    <Layout>
        <PageIntro
            title="Our community"
            text={[
                'A creative community, working together to raise awareness about the climate crisis and inspire action.',
                'Why do we exist?',
                'Who can participate?',
                'Discord & hackathons combined',
                'Our history: how we start? who? when? what has happened since then?',
            ]}
        />
    </Layout>
)

export default Community
