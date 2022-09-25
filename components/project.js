import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href={'/projects'} passHref>
      <Link>Projects</Link>
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

export const Info = ({ children }) => (
  <Badge color={'#98971A'} bgColor={'rgba(152, 151, 26, 0.5)'} mr={2}>
    {children}
  </Badge>
)
