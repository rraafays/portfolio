import NextLink from 'next/link'
import {
  Container,
  Divider,
  Heading,
  Box,
  Image,
  Link,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'

export const Title = ({ children }) => (
  <Box>
    <NextLink href={'/recipies'} passHref>
      <Link>Recipies</Link>
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
  <Image borderRadius={'lg'} w={'full'} src={src} alt={alt} mb={4} />
)

export const Step = ({ stepN, children }) => (
  <Container>
    <Heading
      as={'h2'}
      variant={'track-title'}
      display={'inline-block'}
    >
      {stepN}
    </Heading>
    <Divider mb={4} />
    <Paragraph>
      {children}
    </Paragraph>
  </Container>
)
