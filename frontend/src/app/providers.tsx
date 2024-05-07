'use client'

import { ChakraProvider } from "@chakra-ui/react"

type Props = { children: React.ReactNode }

const Providers = (props: Props) => {
    return (
        <ChakraProvider>{props.children}</ChakraProvider>
    )
}

export default Providers