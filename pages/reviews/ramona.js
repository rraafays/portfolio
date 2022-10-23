import {
  Container,
} from '@chakra-ui/react'
import {
  Title,
  Banner,
  Track
} from '../../components/review'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Banner src={'/images/reviews/ramona.png'} />
        <Title>RAMONA</Title>
        <Section delay={0.1}>
          <Paragraph>
            Kill Bill was a name I'd never heard of until they were mentioned in a random
            comment on a album I'd stumbled upon on YouTube.
            I love discovering music this way, the comment that lead me to listen and
            lead me to write this review was 'Finding Rav and kill bill over quarantine was
            the luckiest thing that ever happened to me'
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Track
            n={'1'}
            title={'Backwoods'}
            stars={'★★★★★'}
          >
            Backwoods is a perfect introduction to Kill Bill's introspective tight flow.
            The samples used here are top-notch and complement Kill Bill's rapping so well
            In this relatively short song he expresses so much in such a concise manor
            which never fails to captivate me on each consecutive listen.
          </Track>
          <Track
            n={2}
            title={'Hola'}
            stars={'★★★★★'}
          >
            More mellow than Backwoods yet no less meaninful, this tune is Kill Bill
            rightfully boasting his unique style. This chiller format of tunes with the
            gentle break half way through to song is something I really love.
          </Track>
          <Track
            n={3}
            title={'FVCK'}
            stars={'★★★★☆'}
          >
            So far this song sports the saddest rhymes and almost trip hop level of slow
            beats to boot. The beats are so mesmerizingly amazing and must have felt especially
            unique in context of the time this album was released.
            I do wish this song was a bit longer and that the ending was used as more of a break
            that leads to more vocals from Kill Bill.
          </Track>
          <Track
            n={4}
            title={'Chinatown'}
            stars={'★★★★☆'}
          >
            Kill Bill's rapping is great here describing a passing romance with such skill and detail.
            The only thing I'm not a fan of is Rav's lyrics for the chorus, they feel quite anemic
            and repetitive but Kill Bill's heartfelt rapping more than makes up for that.
            The beat is quite minimal but fits with the almost story driven nature of this song.
          </Track>
          <Track
            n={5}
            title={'Dream Eater (Feat. Rav x Recahdam)'}
            stars={'★★★★★'}
          >
            This is by far the most sombre song in this album, feeling like a perfect continuation
            of Chinatown. Kill Bill, Rav & Recahdam are both reminiscing over a girl the
            samples are perfect and the whole package almost reminds me of a more chill take on
            Souls of Mischief's 'Step to My Girl' which is without a doubt one of my absolute
            favourite songs, this song is no different.
          </Track>
          <Track
            n={6}
            title={'Black Coffee'}
            stars={'★★★★★'}
          >
            Ah Black Coffee, possibly my absolute favourite song in this already strong album,
            this song tells a story possibly about the same girl and Kill Bill's drifting feelings.
            The beat is so up my alley reminding me of a more spacey take on Nujabes.
            Lyrically this song is so relatable, he's regretting and judging his decisions.
          </Track>
        </Section>
      </Container>
    </Layout >
  )
}

export default Page
