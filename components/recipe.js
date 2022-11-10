import NextLink from 'next/link'
import {
  Divider,
  Heading,
  Box,
  Image,
  Link,
  ListItem,
  Badge,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href={'/recipes'} passHref>
      <Link>Recipes</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display={'inline-block'} as={'h3'} fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const Banner = ({ src, alt }) => (
  <Image borderRadius={'lg'} w={'full'} src={src} alt={alt} mb={4} placeholder={'blur'} />
)

export const Step = ({ stepN, children }) => (
  <Box>
    <Heading
      as={'h2'}
      variant={'track-title'}
      display={'inline-block'}
    >
      {stepN}
    </Heading>
    <Divider mb={4} />
    <p>
      {children}
    </p>
  </Box>
)

export const Ingredient = ({ name, quantity }) => (
  <Box>
    <ListItem>{name} <Badge>{quantity}</Badge></ListItem>
    <Divider mb={1} mt={1} />
  </Box>
)
