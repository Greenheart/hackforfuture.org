import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const Community = () => (
    <Layout>
        <div className="">
            <h1 className="">Our community</h1>
            <p className="">
                A creative community, working together to raise awareness about
                the climate crisis and inspire action.
            </p>

            <p className="">Next hackathon will take place May 9th.</p>

            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    </Layout>
)

export default Community
