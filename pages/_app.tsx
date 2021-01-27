import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import 'focus-visible/dist/focus-visible'

import MDXProvider from '../components/MDXProvider'
import { theme } from '../shared/theme'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
    <MDXProvider>
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    </MDXProvider>
)

export default App
