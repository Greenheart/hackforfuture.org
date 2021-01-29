import { Box, Center, Heading, Text, Link, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import IntroSection from '../components/IntroSection'
import PrimaryCTA from '../components/PrimaryCTA'
import Layout from '../layouts/Layout'
import Partners from '../components/Partners'
import Divider from '../components/Divider'
import { siteName, description } from '../shared/constants'

const Index = () => {
    return (
        <>
            <Layout>
                <Center flexDirection="column" textAlign="center" mb="20">
                    <Heading as="h1" fontSize={['40px', '50px', '60px']} mb="4">
                        {siteName}
                    </Heading>

                    <Text
                        fontSize={['md', null, 'lg', 'xl']}
                        fontWeight="normal"
                        maxW="xl"
                    >
                        {description}
                    </Text>

                    <PrimaryCTA w="unset" />
                </Center>

                <Box maxW="4xl" mt="20" mx="auto">
                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_new_ideas_jdea.svg',
                            alt:
                                'Woman holding out her hand with a large lightbulb to represent new ideas',
                            priority: true,
                        }}
                        heading="Impact Tech for a Sustainable Future"
                        content={
                            <Text>
                                Together, we maximize our positive impact for a
                                sustainable future. By collaborating on
                                interesting projects, we improve our skills and
                                meet new friends, but most importantly, we
                                empower more people to explore opportunities in
                                the impact tech industry.
                            </Text>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_dream_world_cin1.svg',
                            alt:
                                'Woman planting seeds that grow into a dream world',
                            priority: true,
                        }}
                        heading="Open Source"
                        textAlign="left"
                        content={
                            <Text>
                                We release our creations under{' '}
                                <Link
                                    href="https://opensource.org/licenses"
                                    isExternal
                                >
                                    open source licenses
                                </Link>
                                . This helps us simplify collaboration, invite
                                new contributors - and most importantly, to
                                maximize our positive impact by enabling others
                                to build upon what we've created.
                            </Text>
                        }
                    />

                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_inspiration_lecl.svg',
                            alt: 'Man finding inspiration',
                        }}
                        heading="Learning and Mentorship"
                        content={
                            <>
                                <Text>
                                    Come as you are, learn together and work on
                                    inspiring projects. Find a mentor to support
                                    your journey into impact tech, and pay it
                                    forward by becoming a mentor yourself.
                                    Network, learn and grow.
                                </Text>
                            </>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_thought_process_67my.svg',
                            alt:
                                'Man brainstorming, thinking and organizing new ideas',
                        }}
                        heading="Weekly Community Calls"
                        content={
                            <Text>
                                Join our weekly calls to explore and collaborate
                                on creative projects - or just drop in to chat!
                                Find your own learning path and make regular
                                progress by working together.
                            </Text>
                        }
                    />

                    <Flex
                        textAlign="center"
                        mx="auto"
                        maxW={['md', null, 'lg']}
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Box h="70px" w="100%" position="relative" mx="auto">
                            <Image
                                src="/images/hackforfuture-logo-white-1350x225.png"
                                alt={`${siteName} logo`}
                                loading="eager"
                                priority
                                layout="fill"
                                objectFit="contain"
                            />
                        </Box>

                        <Text
                            fontSize={['md', null, 'lg', 'xl']}
                            my="2"
                            fontWeight="400"
                        >
                            The community you've been looking for!
                        </Text>

                        <PrimaryCTA mt="4" alignSelf="center" />
                    </Flex>
                </Box>

                <Divider />

                <Box maxW="2xl" mx="auto">
                    <Partners />
                </Box>
            </Layout>
        </>
    )
}

export default Index
