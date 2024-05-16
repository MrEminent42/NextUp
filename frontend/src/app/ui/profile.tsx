'use client';

import { Avatar, Editable, EditableInput, EditablePreview, Flex, useToast } from '@chakra-ui/react'
import React from 'react'
import { usernameAtom } from '../lib/atoms/usernameAtom';
import { useAtom } from 'jotai';

const Profile = () => {
    const [username, setUsername] = useAtom(usernameAtom);
    const toast = useToast();

    return (
        <Flex alignItems={'center'} gap={'1rem'}>
            <Editable
                value={username === null ? "Enter your name here!" : username}
                onChange={(updated) => setUsername(updated)}
                onSubmit={(updated) => {
                    console.log("we've submitted")
                    if (!updated) {
                        updated = "User";
                        setUsername(updated)
                    }
                    toast({
                        title: `Welcome, ${updated}!`,
                        description: "We've saved your username to your computer.",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                        position: 'top',
                    })
                }}
            >
                <EditablePreview {...editableStyles} />
                <EditableInput {...editableStyles} />
            </Editable>
            <Avatar name={username || "?"} />
        </Flex>
    )
}

const editableStyles = {
    bg: "#e0e0e0ff",
    p: ".2rem .8rem",
    borderRadius: "5px"
}

export default Profile