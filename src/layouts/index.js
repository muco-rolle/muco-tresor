import React from 'react';
import { parseISO, format } from 'date-fns';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Avatar
} from '@chakra-ui/core';

import { BlogSeo, Container } from 'components';
import { getSlug } from 'utils';

export default (frontMatter) => {
    const slug = getSlug(frontMatter.__resourcePath);

    return ({ children }) => {
        const { colorMode } = useColorMode();
        const textColor = {
            light: 'gray.700',
            dark: 'gray.400'
        };

        return (
            <Container>
                <BlogSeo
                    url={`https://mucotresor/blog/${slug}`}
                    {...frontMatter}
                />
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    w="100%"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        w="100%"
                    >
                        <Heading
                            letterSpacing="tight"
                            mb={2}
                            as="h1"
                            size="2xl"
                        >
                            {frontMatter.title}
                        </Heading>
                        <Flex
                            justify="space-between"
                            align={['initial', 'center']}
                            direction={['column', 'row']}
                            mt={2}
                            w="100%"
                            mb={4}
                        >
                            <Flex align="center">
                                <Avatar
                                    size="sm"
                                    name="Muco Tresor"
                                    src="/assets/muco.jpg"
                                    mr={2}
                                />
                                <Text
                                    fontSize="sm"
                                    color={textColor[colorMode]}
                                >
                                    {frontMatter.by}
                                    {'Muco Trésor/ '}
                                    {format(
                                        parseISO(frontMatter.publishedAt),
                                        'MMMM dd, yyyy'
                                    )}
                                </Text>
                            </Flex>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                minWidth="100px"
                                mt={[2, 0]}
                            >
                                {frontMatter.readingTime.text}
                            </Text>
                        </Flex>
                    </Flex>
                    {children}
                </Stack>
            </Container>
        );
    };
};
