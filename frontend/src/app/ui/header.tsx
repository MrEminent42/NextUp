import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Profile from './profile'

const Header = () => {
    return (
        <Flex
            p={'.5rem 1rem'}
            justifyContent={"space-between"}
            bgImage={'linear-gradient(#ffe5e5, white)'}
        >
            <Heading>NextUp</Heading>
            <Profile />
        </Flex>
    )
}

export default Header