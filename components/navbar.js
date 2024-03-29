import Logo from './logo'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {
  Container,
  Box,
  Stack,
  Link,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const grayColorI = useColorModeValue('#7C6F64', '#A89984')
  const fgColorN = useColorModeValue('#EBDBB2', '#282828')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? grayColorI : undefined}
        color={active ? fgColorN : grayColorI}
        borderRadius={'lg'}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const grayColorI = useColorModeValue('#7C6F64', '#A89984')
  const fgColorN = useColorModeValue('#EBDBB2', '#3C3836')
  const fgColorI = useColorModeValue('#3C3836', '#EBDBB2')

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#FBF1C7', '#282828')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display={'flex'}
        p={2}
        maxW={'container.md'}
        wrap={'wrap'}
        align={'center'}
        justify={'space-between'}
      >
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href={'/projects'} path={path}>
            Projects
          </LinkItem>
          <LinkItem href={'/recipes'} path={path}>
            Recipes
          </LinkItem>
          <LinkItem href={'/artworks'} path={path}>
            Artworks
          </LinkItem>
          <LinkItem href={'/playlists'} path={path}>
            Playlists
          </LinkItem>
          <LinkItem href={'/reviews'} path={path}>
            Reviews
          </LinkItem>
        </Stack>
        <Box flex={1} align={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Options'}
                borderWidth={0}
                backgroundColor={fgColorN}
                color={fgColorI}
              />
              <MenuList
                backgroundColor={fgColorN}
                color={fgColorI}
                borderColor={grayColorI}
              >
                <NextLink href={'/'} passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href={'/projects'} passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href={'/recipes'} passHref>
                  <MenuItem as={Link}>Recipes</MenuItem>
                </NextLink>
                <NextLink href={'/artworks'} passHref>
                  <MenuItem as={Link}>Artworks</MenuItem>
                </NextLink>
                <NextLink href={'/playlists'} passHref>
                  <MenuItem as={Link}>Playlists</MenuItem>
                </NextLink>
                <NextLink href={'/reviews'} passHref>
                  <MenuItem as={Link}>Reviews</MenuItem>
                </NextLink>
                <MenuItem as={Link} href={'https://www.github.com/rraafays/portfolio'}>source code</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container >
    </Box >
  )
}

export default Navbar
