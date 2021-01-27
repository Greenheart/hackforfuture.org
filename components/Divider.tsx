import { FC } from 'react'
import {
    Divider as ChakraDivider,
    DividerProps as ChakraDividerProps,
} from '@chakra-ui/react'

const Divider: FC<ChakraDividerProps> = (props) => (
    <ChakraDivider maxW="xs" my="20" mx="auto" {...props} />
)

export default Divider
