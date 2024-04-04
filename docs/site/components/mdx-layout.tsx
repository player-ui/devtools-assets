import { Container, Flex } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from './mdx-components';


export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <Flex alignItems="center">
            <Container maxW="container.lg">
                <MDXProvider components={MDXComponents} >
                    {children}
                </MDXProvider>
            </Container>
        </Flex>
    )
}