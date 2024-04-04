import { Container, Flex, Divider, Box } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from './mdx-components';
import { TopNavigation, SideNavigation } from './Navigation';


export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    const maxH = `calc(100vh - 88px)`;
    const minH = `calc(100vh - 88px - 105px)`;

    return (
        <Flex flexDir="column" padding="2">
            <TopNavigation />
            <Divider />
            <Flex>
                <Box as="main" w="100%" mx="auto">
                    <Box display={{ md: 'flex' }}>
                        <Box
                            display={{
                                base: 'none',
                                md: 'block',
                            }}
                            overflow="auto"
                            maxH={maxH}
                            pr="8"
                            ml="4"
                        >
                            <SideNavigation />
                        </Box>
                        <Box flex="1" minW="0" overflow="auto" maxH={maxH}>
                            <Box minH={minH}>
                                <MDXProvider components={MDXComponents} >
                                    {children}
                                </MDXProvider>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}