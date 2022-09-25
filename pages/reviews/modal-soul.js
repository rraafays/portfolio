import {
  Container,
  Heading,
  Divider,
  Badge,
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
        <Banner src={'/images/reviews/modal-soul.jpeg'} />
        <Title>Modal Soul</Title>
        <Section delay={0.1}>
          <Paragraph>
            Nujabes was without a doubt one of the most unique artists,
            masterfully and gracefully combining hip-hop and jazz.
            Modal Soul is arguably their best release in a discography that is
            pretty much perfect in this nieche subgenre of hip-hop.
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Track
            titleN={'1'}
            title={'Feather'}
            stars={'★★★★★'}
          >
            Piano keys elegently open this track and in turn open this album beautifully.
            They're quickly tended to by very heartfelt rapping about letting go of life's worries.
            This perfectly sets the tone of the album and shows how competent Nujabes is at weaving
            gracefully complex jazz samples with a heavy rhythm and strong vocals.

          </Track>
          <Track
            titleN={2}
            title={'Ordinary Joe'}
            stars={'★★★☆☆'}
          />
          <Track
            titleN={3}
            title={'Reflection Eternal'}
            stars={'★★★★☆'}
          >
            Similar to Feather, this is a majorly piano driven track. Here Nujabes expertise
            in creating blissful soundscapes brings out memories perfect for reminiscion.
            The subtle vocals really add to the calm yet uplifting nature of this track, makes
            the runtime fly by in a good and effortless way.
          </Track>
          <Track
            titleN={4}
            title={'Luv (Sic), Part 3'}
            stars={'★★★★★'}
          >
            Immediately this track stands out in this album, the sample of an Isaac Hayes
            drum beat is gracefully yet quickly matched by an elegant piano sample.
            Shing02's vocals really shine bringing out a combination of uplifting emotions
            which are further complemented by the complexely brilliant harmonies created by Nujabes.
            `I see clear when the world doesn't show it to me`

          </Track>
          <Track
            titleN={5}
            title={'Music is Mine'}
            stars={'★★★☆☆'}
          />
          <Track
            titleN={6}
            title={'Eclipse'}
            stars={'★★★★★'}
          >
            What at first seems like a simple drum intro unfolds into a magnificent pairing
            of Nujabes immense choice of piano sampling and Substantial's heartfelt vocals.
            This song truly shows a match made in heaven, the lyrics and the beats just complement
            eachother so perfectly.
            The meaning of this song is important it seems to be about at long distance relationship
            where `distance makes a heart grow fonder` This song is just beautiful.
            `even the toughest man on the planet need loving and nothing tames the wild like a woman's embrace`

          </Track>
          <Track
            titleN={7}
            title={'The Sign'}
            stars={'★★★★☆'}
          >
            I absolutely love the messaging behind this song and the way it's delivered but
            I can't help but feel like this track drags on for what it is.
            It lacks those chunky Nujabes drum beat I love so much but I absolutely am nitpicking.
          </Track>
          <Track
            titleN={8}
            title={'Thank You'}
            stars={'★★★★☆'}
          >
            Pacing on this track never ceases to amaze me, this is one of the faster songs
            in the album with many different sounds from violins to acoustic guitars woven
            in and out. There's a break in this track always keeps me coming back but what
            truly stands out to me every listen is how during the break the acoustic guitar
            effortlessly stays and fits with the rest of the song which is such a rare
            thing to hear and only truly gets appreciated on consecutive listens.
          </Track>
        </Section>
      </Container>
    </Layout >
  )
}

export default Page
