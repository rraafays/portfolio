import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius={'lg'} bg={'#ebdbb2'} color={'#3c3836'} p={3} mb={6} align={'center'}>
        Hey, I'm Raf, a full-stack developer based in Leeds
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Raf Shahid
          </Heading>
          <p>Digital Chef ( Developer / Painter / Cook )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
