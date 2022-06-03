import { MDXProvider as Default } from '@mdx-js/react'
import { Heading, Text } from '@chakra-ui/react'

const mdComponents = {
    h1: (props) => <Heading as="h1" size="2xl" {...props} />,
    h2: (props) => <Heading as="h2" size="xl" {...props} />,
    h3: (props) => <Heading as="h3" size="lg" {...props} />,
    h4: (props) => <Heading as="h4" size="md" {...props} />,
    h5: (props) => <Heading as="h5" size="sm" {...props} />,
    h6: (props) => <Heading as="h6" size="xs" {...props} />,
    p: (props) => <Text {...props} />,
}

const MDXProvider = ({ children }) => (
    <Default components={mdComponents}>{children}</Default>
)

export default MDXProvider
