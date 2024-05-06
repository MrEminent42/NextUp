import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <Box p={'.5rem 1rem'}>
            <Heading>NextUp</Heading>
        </Box>
    )
}

export default Header