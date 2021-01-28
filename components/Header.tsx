import { Flex, Link, Container } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'

import { email, siteName } from '../shared/constants'

interface NavLinkProps {
    href: string
    children: React.ReactNode
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <NextLink href={href} passHref>
        <Link py={[2, 4]} px={[2, 3]} variant="white">
            {children}
        </Link>
    </NextLink>
)

const Header = () => (
    <Container
        as="header"
        maxW="1080px"
        py="0"
        pl={[3, null, null, 0]}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
    >
        <NextLink href="/" passHref>
            <Link h="70px" w="200px" position="relative">
                <Image
                    src="/images/hackforfuture-logo-white-1350x225.png"
                    alt={`${siteName} logo`}
                    loading="eager"
                    priority
                    layout="fill"
                    objectFit="contain"
                />
            </Link>
        </NextLink>

        <Flex as="nav" fontWeight="bold" justifyContent="flex-start">
            <NavLink href="/about">About</NavLink>
            <NavLink href={'mailto:' + email}>Contact</NavLink>
        </Flex>
    </Container>
)

export default Header
