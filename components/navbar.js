import Logo from './logo'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#7C6F64', '#A89984')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? '#458588' : undefined}
        color={active ? '#458588' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#fbf1c7', '#282828')}
      style={{ backdropFilter: 'blur(10px' }}
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
      </Container>
    </Box>
  )
}

export default Navbar
