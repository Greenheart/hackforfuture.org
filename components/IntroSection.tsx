import { GridProps, Grid, Box, Heading, BoxProps } from '@chakra-ui/react'
import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

import Card from './Card'

const sides = {
    left: '2fr 3fr',
    right: '3fr 2fr',
}

interface IntroSectionProps extends GridProps {
    imageSide?: keyof typeof sides
    image: Pick<ImageProps, 'alt' | 'src' | 'priority'>
    heading: string
    content: React.ReactNode
    textAlign?: BoxProps['textAlign']
    imagePriority?: ImageProps['priority']
}
const IntroSection: FC<IntroSectionProps> = ({
    imageSide = 'right',
    image,
    heading,
    content,
    textAlign = 'left',
    ...props
}) => (
    <Grid
        fontSize="20px"
        width="100%"
        mb="20"
        gridTemplateColumns={['1fr', null, sides[imageSide]]}
        gap={[0, 0, 4]}
        {...props}
    >
        <Box
            p="4"
            order={[0, null, imageSide === 'right' ? 1 : 0]}
            display="flex"
            justifyContent="center"
            alignSelf="center"
        >
            <Image
                width={300}
                height={300}
                {...image}
                priority={image.priority}
                loading={image.priority ? 'eager' : 'lazy'}
            />
        </Box>
        <Card
            mx={[0, 6, 0]}
            display="grid"
            gridTemplateColumns="1fr"
            gridTemplateRows="min-content min-content"
            alignSelf="center"
        >
            <Heading
                as="h2"
                fontSize={[20, null, 24]}
                mb="2"
                textAlign="center"
            >
                {heading}
            </Heading>
            <Box fontSize={[18, null, 20]} textAlign={textAlign}>
                {content}
            </Box>
        </Card>
    </Grid>
)

export default IntroSection
