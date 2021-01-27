import Head from 'next/head'
import { Box, Container, ContainerProps } from '@chakra-ui/react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { colors } from '../shared/theme'
import { description, siteName } from '../shared/constants'

export interface LayoutProps extends ContainerProps {
    children: React.ReactNode
    meta?: MetaProps
}

interface MetaProps {
    title?: string
    description?: string
    image?: {
        url: string
        alt: string
        width: string
        height: string
        type: string
    }
}

const defaultMeta = {
    title: siteName,
    description,
    image: {
        url: 'https://hackforfuture.org/images/hackforfuture-square-logo.png',
        alt: `${siteName} logo`,
        width: '1172',
        height: '1172',
        type: 'image/png',
    },
}

export default function Layout({ children, meta = {}, ...props }: LayoutProps) {
    const { title, description, image } = {
        ...defaultMeta,
        ...meta,
    }
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta property="og:title" content={title} name="title" />
                <meta
                    property="og:description"
                    content={description}
                    name="description"
                />
                <meta property="og:image" content={image.url} />
                <meta property="og:image:alt" content={image.alt} />
                <meta property="og:image:width" content={image.width} />
                <meta property="og:image:height" content={image.height} />
                <meta property="og:url" content="https://hackforfuture.org" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon-32x32.png" />
                <link rel="manifest" href="/manifest.webmanifest" />
                <meta name="theme-color" content={colors.blue} />
                <link
                    rel="apple-touch-icon"
                    sizes="32x32"
                    href="images/hackforfuture-bend-the-curve-32x32.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="48x48"
                    href="images/hackforfuture-bend-the-curve-48x48.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="images/hackforfuture-bend-the-curve-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="96x96"
                    href="images/hackforfuture-bend-the-curve-96x96.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="images/hackforfuture-bend-the-curve-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="images/hackforfuture-bend-the-curve-192x192.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="256x256"
                    href="images/hackforfuture-bend-the-curve.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="384x384"
                    href="images/hackforfuture-bend-the-curve.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="images/hackforfuture-bend-the-curve.png"
                />
            </Head>

            <Header />
            <Container mt="8" maxW="1280px" {...props}>
                {children}
            </Container>
            <Footer mt="16" />
        </>
    )
}
