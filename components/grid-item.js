import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkOverlay, LinkBox } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, title, thumbnail }) => (
  <Box w={'100%'} textAlign={'center'}>
    <LinkBox cursor={'default'}>
      <Image
        src={thumbnail}
        alt={title}
        className={'grid-item-thumbnail'}
        placeholder={'blur'}
        loading={'lazy'}
      />
      <Text mt={2} fontWeight={'bold'}>{title}</Text>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w={'100%'} textAlign={'center'}>
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20} fontWeight={'bold'}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const RecipieGridItem = ({ children, id, title, thumbnail }) => (
  <Box w={'100%'} textAlign={'center'}>
    <NextLink href={`/recipies/${id}`} passHref scroll={false}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20} fontWeight={'bold'}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const PlaylistGridItem = ({ children, href, title, thumbnail }) => (
  <Box w={'100%'} textAlign={'center'}>
    <NextLink href={href} passHref scroll={false}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
        />
        <LinkOverlay href={href}>
          <Text mt={2} fontSize={20} fontWeight={'bold'}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
