import React from 'react';
import NextLink from 'next/link';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Button
} from '@chakra-ui/core';

import { Container } from 'components';

export const ErrorView = () => {
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <Container>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        Aie Aie Aie!!! 404 Error
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]} my={4}>
                        The page you're looking for seems to not exist anymore.
                        Please
                    </Text>
                    <NextLink href="/" passHref>
                        <Button
                            as="a"
                            p={[1, 4]}
                            w="250px"
                            fontWeight="bold"
                            m="3rem auto 0"
                            _focus={{ border: 'none' }}
                        >
                            Return Home
                        </Button>
                    </NextLink>
                </Flex>
            </Stack>
        </Container>
    );
};
