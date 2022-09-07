import { Container, Box, Button, Heading, Link, Image, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  const grayColorI = useColorModeValue('#7C6F64', '#A89984')
  const fgColorN = useColorModeValue('#EBDBB2', '#3C3836')
  const fgColorI = useColorModeValue('#3C3836', '#EBDBB2')
  return (
    <Container>
      <Box borderRadius={'lg'} bg={fgColorN} color={fgColorI} p={3} mb={6} align={'center'}>
        Hey, I'm Raf, a full-stack developer based in Leeds
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Raf Shahid
          </Heading>
          <p>Digital Chef ( Developer / Painter / Cook )</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={'center'}>
          <Image
            borderColor={grayColorI}
            borderWidth={2}
            borderStyle={'solid'}
            maxWidth={'100px'}
            disaply={'inline-block'}
            borderRadius={'full'}
            src={'/images/raf.jpg'}
            alt={'Just me chilling'}
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          textDecorationColor={useColorModeValue('#AF3A03', '#FE8019')}
        >
          About
        </Heading>
        <Paragraph>
          Raf is a software student and aspiring full-stack developer based in Leeds with a passion for building digital services/solutions to tackle life's challenges.
          He has a knack for spotting a problem and creating a solution, from the planning and designing stage all the way to development.
          Away from the keyboard, he loves creating artworks, exploring music & late night drives.
          Currently, he is studying at {' '} <Link href='https://www.shu.ac.uk' color={useColorModeValue('#8F3F71', '#D3869B')}>Sheffield Hallam University</Link>.
        </Paragraph>
        <Box align={'center'} my={4}>
          <NextLink href={'/works'}>
            <Button rightIcon={<ChevronRightIcon />} bgColor={useColorModeValue('#076678', '#83A598')}>
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page
