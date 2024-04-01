import Link from 'next/link';
import {
  ButtonGroup,
  Button
} from '@chakra-ui/react';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div>
        <ButtonGroup spacing="16" size="lg">
          <Link passHref href="/my-mdx-page">
            <Button variant="outline">Learn More</Button>
          </Link>

          <Link passHref href="/page">
            <Button variant="solid">Get Started</Button>
          </Link>
        </ButtonGroup>

      </div>
    </main>
  );
}
