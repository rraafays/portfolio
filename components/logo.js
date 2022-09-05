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

  &:hover icon {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const iconImg = `/images/pan${useColorModeValue('', '-dark')}.png`
  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={iconImg} width={40} height={40} alt={'logo'} />
          <Text
            color={useColorModeValue('#3c3836', '#ebdbb2')}
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
