import { FC } from 'react'
import NextLink from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'

import { communityInvite } from '../shared/constants'

const PrimaryCTA: FC<ButtonProps> = ({ ...props }) => (
    <NextLink href={communityInvite} passHref>
        <Button
            mt="8"
            as="a"
            target="_blank"
            rel="noopener"
            size="lg"
            px="12"
            w={['100%', 'unset']}
            {...props}
        >
            Join us!
        </Button>
    </NextLink>
)

export default PrimaryCTA
