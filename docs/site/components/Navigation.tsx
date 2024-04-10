import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Flex,
  Button,
  Box,
  chakra,
  Drawer,
  DrawerContent,
  Heading,
  HStack,
  Image,
  Icon,
  IconButton,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import type { Route } from '../config/navigation';
import NAV, { PATH_TO_NAV } from '../config/navigation';
import { ColorSchemeSwitch } from './ColorSchemeSwitch';
import { GITHUB_URL } from '../config/constants';
import { withBasePrefix } from './Image';
import { GithubIcon } from './gh-icon';

const getPathFromRoute = (route: Route): string => {
  if (route.path) {
    return route.path;
  }

  if (route.routes) {
    for (const r of route.routes) {
      const nestedRoute = getPathFromRoute(r);
      if (nestedRoute) {
        return nestedRoute;
      }
    }
  }

  return '';
};


const NavTitleOrLink = (props: { route: Route }) => {
  const { route } = props;

  const { pathname } = useRouter();
  const router = useRouter();
  const langpref = router.query.lang;
  const selectedButtonColor = useColorModeValue('blue.800', 'blue.600');

  if (route.path) {
    return (
      <chakra.li>
        <Link
          passHref
          href={{
            pathname: route.path,
            query: langpref ? { lang: langpref } : undefined,
          }}
        >
          <Button
            size="sm"
            variant="ghost"
            mx="3"
            colorScheme={pathname === route.path ? 'blue' : 'gray'}
            color={pathname === route.path ? selectedButtonColor : undefined}
          >
            <HStack spacing="2">
              <Text>{route.title}</Text>
            </HStack>
          </Button>
        </Link>
      </chakra.li>
    );
  }

  return (
    <Heading as="h4" size="md" mt="8">
      {route.title}
    </Heading>
  );
};

const SideNavigationList = (props: { route: Route }) => {
  const { route } = props;

  return (
    <Box>
      <NavTitleOrLink route={route} />

      {route.routes && (
        <UnorderedList spacing={1} ml="0" mt="2" styleType="none">
          {route.routes.map((r) => (
            <SideNavigationList key={r.title} route={r} />
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};

export const SideNavigation = () => {
  const { pathname } = useRouter();
  const subRoutes = PATH_TO_NAV.get(pathname);

  const route = NAV.routes.find((r) => r.title === subRoutes?.[0]);

  if (!route) {
    return null;
  }

  return (
    <Box as="nav">
      <SideNavigationList route={route} />
    </Box>
  );
};

export const Footer = () => {
  return null;
};

export const GitHubButton = () => {
  return (
    <Link aria-label="Go to our GitHub page" href={GITHUB_URL}>
      <IconButton
        variant="ghost"
        aria-label="Go to our Github page"
        icon={
          <Icon
            as={GithubIcon}
            display="block"
            transition="color 0.2s"
            w="5"
            h="5"
          />
        }
      />
    </Link>
  );
};

export const TopNavigation = () => {
  const { pathname } = useRouter();
  const subRoutes = PATH_TO_NAV.get(pathname);
  const mobileNavDisclosure = useDisclosure();

  const currentTopLevelRoute = NAV.routes.find(
    (r) => r.title === subRoutes?.[0]
  );

  const logoSrc = useBreakpointValue({
    base: useColorModeValue(
      withBasePrefix('/logo/logo-light-small.png'),
      withBasePrefix('/logo/logo-dark-small.png')
    ),
    lg: useColorModeValue(
      withBasePrefix('/logo/logo-light-large.png'),
      withBasePrefix('/logo/logo-dark-large.png')
    ),
  });

  const selectedButtonColor = useColorModeValue('blue.800', 'blue.600');

  return (
    <Flex w="100%" h="100%" direction="column" align="center">
      <Flex px="6" w="100%" h="100%" align="center" justify="space-between">
        <HStack>
          <IconButton
            variant="ghost"
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            aria-label="Open Side Navigation Menu"
            onClick={mobileNavDisclosure.onOpen}
          />
          <Link passHref href="/">
            <Image alt="Player Logo" height="48px" src={logoSrc} style={{ margin: '16px 0 16px 0' }} />
          </Link>
        </HStack>

        <Box>
          <HStack spacing="4">
            {NAV.routes.map((topRoute) => {
              const navRoute = getPathFromRoute(topRoute);
              const isSelected = currentTopLevelRoute?.title === topRoute.title;

              return (
                <Link key={topRoute.title} passHref href={navRoute} >
                  <Button
                    variant="ghost"
                    colorScheme={isSelected ? 'blue' : 'gray'}
                    color={isSelected ? selectedButtonColor : undefined}
                    size="md"
                    ml="0"
                    suppressHydrationWarning
                  >
                    {topRoute.title}
                  </Button>
                </Link>
              );
            })}
            <ColorSchemeSwitch />
            <GitHubButton />
          </HStack>
        </Box>
        <Drawer
          isOpen={mobileNavDisclosure.isOpen}
          placement="left"
          onOverlayClick={mobileNavDisclosure.onClose}
          onClose={mobileNavDisclosure.onClose}
        >
          <DrawerContent>
            <Box px="10" maxH="100vh" overflowY="auto">
              <SideNavigation />
            </Box>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};
