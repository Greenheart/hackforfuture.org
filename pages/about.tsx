import { Heading, Link, Text, Center } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Partners from '../components/Partners'
import Image from 'next/image'

import { siteName } from '../shared/constants'
import Divider from '../components/Divider'

const About = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Heading>About us</Heading>
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
        <Text mt="2">The history behind why {siteName} exists.</Text>

        <Text mt="4">And another paragraph.</Text>
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

// export default About
