import { FC } from 'react'
import NextLink from 'next/link'
import { Flex, FlexProps, Link } from '@chakra-ui/react'

import { email, siteName } from '../shared/constants'

const Footer: FC<FlexProps> = (props) => (
    <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        pb="16"
        as="footer"
        {...props}
    >
        &copy; {new Date().getFullYear()} {siteName}
        <Flex>
            {/* <NextLink href="/about" passHref>
                <Link variant="yellow" py="4" px="3">
                    About
                </Link>
            </NextLink> */}
            <NextLink href={`mailto:${email}`} passHref>
                <Link variant="yellow" py="4" px="3">
                    Contact
                </Link>
            </NextLink>
        </Flex>
    </Flex>
)

export default Footer
