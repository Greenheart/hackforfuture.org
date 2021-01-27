import { FC } from 'react'
import { Text, Link, Heading, Grid, Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

import { email, siteName } from '../shared/constants'

interface Partner {
    name: string
    link: string
    logo: string
}

const partners: Partner[] = [
    {
        name: "We Don't Have Time",
        link: 'https://wedonthavetime.org?utm_source=hackforfuture.org',
        logo: '/images/wedonthavetime-2-line-rgb.png',
    },
]

export interface PartnersProps extends BoxProps {}

const Partners: FC<PartnersProps> = (props) => {
    return partners.length ? (
        <Box {...props}>
            <Heading textAlign="center" mb="8">
                Our partners
            </Heading>
            <Grid
                mx="auto"
                gridTemplateColumns="repeat(auto-fill, minmax(min(250px, 100%), 1fr))"
                gap="6"
                justifyContent="center"
                mb="8"
            >
                {partners.map((p, index) => (
                    <Link
                        key={p.name}
                        height="80px"
                        width="auto"
                        position="relative"
                        isExternal
                        href={p.link}
                        // If we have an odd number of partners, let the last logo take full width
                        {...(index % 2 === 0 && index === partners.length - 1
                            ? {
                                  gridColumnStart: [null, 1],
                                  gridColumnEnd: [null, -1],
                              }
                            : {})}
                    >
                        <Image
                            src={p.logo}
                            layout="fill"
                            unoptimized
                            objectFit="contain"
                            alt={p.name + ' logo'}
                        />
                    </Link>
                ))}
            </Grid>
        </Box>
    ) : null
}

export default Partners
