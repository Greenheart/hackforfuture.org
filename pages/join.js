import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const Join = () => (
    <Layout>
        <div className="">
            <h1 className="">Our hackathons</h1>

            <p className="">Next hackathon will take place May 9th.</p>

            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    </Layout>
)

export default Join
