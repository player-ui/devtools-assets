import Link from 'next/link';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import {
  ButtonGroup,
  Button,
  VStack
} from '@chakra-ui/react';
import styles from "./page.module.css";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <div>
          <VStack gap="8">
            <ButtonGroup spacing="6" size="lg">
              <Link passHref href="/my-mdx-page">
                <Button variant="outline">Learn More</Button>
              </Link>

              <Link passHref href="/page">
                <Button variant="solid">Get Started</Button>
              </Link>
            </ButtonGroup>
          </VStack>
        </div>
      </main>
    </ChakraProvider>
  );
}
