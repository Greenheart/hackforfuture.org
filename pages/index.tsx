import {
    Box,
    Center,
    Heading,
    ListItem,
    Text,
    Link,
    UnorderedList,
} from '@chakra-ui/react'

import Card from '../components/Card'
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
                        fontSize={['xl', null, null, 'xl']}
                        fontWeight="normal"
                        maxW="xl"
                    >
                        {description}
                    </Text>

                    <PrimaryCTA w={['unset']} />
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
                                sustainable future. By building interesting
                                projects, we grow our skills and meet new
                                friends, but most importantly, we empower more
                                people to explore opportunities in the impact
                                tech industry.
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
                                , both to simplify collaboration, invite new
                                contributors - and most importantly to maximize
                                our positive impact by enabling others to build
                                upon what we've created.
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
                                    your journey into impact tech - and pay it
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
                        heading="Flexibility"
                        content={
                            <Text>
                                Join our regular community calls and collaborate
                                as much as you'd like, when you like to. We
                                value open communication and supporting each
                                other to find a personally sustainable
                                engagement for a sustainable future.
                            </Text>
                        }
                    />

                    <Card textAlign="center" mx={[0, 6, 'auto']} maxW="md">
                        <Heading
                            as="h2"
                            fontSize={[20, null, 24]}
                            textAlign="center"
                        >
                            Let's co-create a sustainable future!
                        </Heading>

                        <Center>
                            <PrimaryCTA mt="4" />
                        </Center>
                    </Card>
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
