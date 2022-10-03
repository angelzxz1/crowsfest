import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  useColorModeValue,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const color = "whiteAlpha.900";
  const LinkStyle = {
    p: 2,
    color: color,
    borderRadius: "md",
    position: "relative",

    _before: !active
      ? {
          content: '""',
          position: "absolute",
          bottom: "12%",
          left: "50%",
          h: "1px",
          w: 0,
          transition: "all 200ms ease",
          bg: color
        }
      : {
          content: '""',
          position: "absolute",
          bottom: "12%",
          left: 0,
          h: "1px",
          w: "100%",
          transition: "all 200ms ease",
          bg: color
        },
    _hover: !active
      ? {
          _before: {
            left: 0,
            w: "100%"
          }
        }
      : {}
  };
  return (
    <NextLink href={href} passHref>
      <Link {...LinkStyle}>{children}</Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          w={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/" path={path}>
            Inicio
          </LinkItem>
          <LinkItem href="/schedule" path={path}>
            Agenda
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contacto
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                _hover={{
                  bg: useColorModeValue("crowRed.50", "gray.700")
                }}
                _active={{
                  bg: useColorModeValue("crowRed.200", "gray.700")
                }}
              />
              <MenuList bg={useColorModeValue("crowRed.200", "gray.700")}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/schedule" passHref>
                  <MenuItem as={Link}>Agenda</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contacto</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
