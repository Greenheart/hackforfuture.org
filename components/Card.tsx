import { Box, BoxProps } from '@chakra-ui/react'
import { FC } from 'react'

interface CardProps extends BoxProps {
    children: React.ReactNode
}
const Card: FC<CardProps> = ({ children, ...props }) => (
    <Box
        boxShadow="0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)"
        borderRadius="lg"
        p={[4, null, null, 6]}
        bg="rgba(255, 255, 255, .9)"
        color="black"
        {...props}
    >
        {children}
    </Box>
)

export default Card
