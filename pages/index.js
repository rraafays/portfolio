import { Container, Box, Button, Heading, Link, Image, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { TimelineSection, TimelineYear } from '../components/timeline'

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
          <p>'Digital Chef' ( Developer / Painter / Cook )</p>
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
          textDecorationColor={fgColorI}
        >
          About
        </Heading>
        <Paragraph>
          Raf is a software student and aspiring full-stack developer based in Leeds with a passion for building digital services/solutions to tackle life's challenges.
          He has a knack for spotting a problem and creating a solution, from the planning & design stage all the way to research & development.
          Away from the keyboard, he loves creating artwork, exploring music & late-night drives.
          Currently, he is studying at {' '} <Link href='https://www.shu.ac.uk' color={useColorModeValue('#8F3F71', '#D3869B')}>Sheffield Hallam University</Link>.
        </Paragraph>
        <Box align={'center'} my={4}>
          <NextLink href={'/projects'}>
            <Button
              rightIcon={<ChevronRightIcon />}
              bgColor={useColorModeValue('#076678', '#83A598')}
              color={fgColorN}
            >
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          textDecorationColor={useColorModeValue('#427B58', '#8EC07C')}
        >
          Journey
        </Heading>
        <TimelineSection>
          <TimelineYear>2002</TimelineYear>
          Born in Leeds, UK.
        </TimelineSection>
        <TimelineYear>2018</TimelineYear>
        Started doing art commissions.
        <TimelineSection>
          <TimelineYear>2019</TimelineYear>
          Learnt about POSIX compliant software, started daily driving Gentoo Linux.
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>2020 - present</TimelineYear>
          Studys software at Sheffield Hallam University.
        </TimelineSection>
      </Section>

      <Section delay={0.1}>
        <Heading
          as={'h3'}
          variant={'section-title'}
          textDecorationColor={useColorModeValue('#9D0006', '#FB4934')}
        >
          Interests
        </Heading>
        <Paragraph>
          Cooking, Music, Audio Equipment, Art, Device Restoration, Cars
        </Paragraph>
      </Section>

      <Section delay={1}>
        <Heading
          as={'h1'}
          variant={'WIP'}
          color={useColorModeValue('#7C6F64', '#A89984')}
        >
          (._.) WIP...
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
