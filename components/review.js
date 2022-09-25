import NextLink from 'next/link'
import {
  Divider,
  Heading,
  Box,
  Image,
  Link,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'

export const Title = ({ children }) => (
  <Box>
    <NextLink href={'/reviews'} passHref>
      <Link>Reviews</Link>
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

export const Track = ({ n, title, stars, children }) => (
  <Box>
    <Heading
      as={'h2'}
      variant={'track-title'}
      display={'inline-block'}
    >
      {n} - {title}&ensp;
    </Heading>
    <Badge bgColor={'rgba(215, 153, 33, 0.3)'} color={'#D79921'}>{stars}</Badge>
    <Divider mb={4} />
    <Paragraph>
      {children}
    </Paragraph>
  </Box>
)
