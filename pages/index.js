import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

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
    </Container>
  )
}

export default Page
