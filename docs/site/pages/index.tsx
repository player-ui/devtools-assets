import Link from 'next/link';
import {
  ButtonGroup,
  Button,
  VStack,
  Text
} from '@chakra-ui/react';
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <div>
          <VStack gap="8">
            <Text fontSize='5xl'> Devtools Assets </Text>
            <ButtonGroup spacing="6" size="lg">
              <Link passHref href="/my-mdx-page">
                <Button variant="outline">Get Started</Button>
              </Link>
              <Link passHref href="/mdx-page">
                <Button variant="outline">See example</Button>
              </Link>
            </ButtonGroup>
          </VStack>
        </div>
      </main>
  );
}
