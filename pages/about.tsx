import { Heading, Link, Text, Center, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Partners from '../components/Partners'

import { siteName, description } from '../shared/constants'
import Divider from '../components/Divider'

const About = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading textAlign="center" mb="8">
            About us
        </Heading>
        <Center mb="8">
            <Image
                src="/images/undraw_real_time_collaboration_c62i.svg"
                alt={`${siteName} logo`}
                priority
                loading="eager"
                width={442}
                height={'auto'}
            />
        </Center>

        <Box fontSize={['md', null, 'lg']} fontWeight="normal">
            <Text mb="4">
                Founded in October, 2019, {siteName} is a {description.slice(1)}
                .
            </Text>
            <Text mb="4">
                We initially organized 7 climate hackathons between October 2019
                - June 2020, but figured we wanted to focus more on building
                interesting projects rather than organizing events. That's why
                we now meet for weekly community calls to make regular progress
                on our projects and have fun together.
            </Text>
            <Text>
                It's a great way to learn learn new things and build your
                network within the impact tech industry. Join us!
            </Text>
        </Box>

        {/* IDEA: Add projects that have been created in the community */}
        {/* <Projects /> */}
        {/*
            Swipe for Future
            Treehugger
            FutureVisions.earth
            Rating Municipalities for Aktuell Hållbarhet
        */}

        <Center>
            <PrimaryCTA />
        </Center>
        <Center>
            <NextLink href="/" passHref>
                <Link variant="white" my="2" p="2">
                    Learn more
                </Link>
            </NextLink>
        </Center>

        <Divider my="8" />

        <Partners />
    </Layout>
)

export default About
