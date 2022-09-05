import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const iconImg = `/images/pan${useColorModeValue('', '-dark')}.png`
  return (
    <Link href={'/'} scroll={false}>
      <a>
        <LogoBox>
          <Image src={iconImg} width={30} height={30} alt={'logo'} />
          <Text
            color={useColorModeValue('#3C3836', '#EBDBB2')}
            fontFamily={'M PLUS Rounded 1c'}
            fontWeight={'bold'}
            ml={3}
          >
            Raf Shahid
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
