import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  Image,
  List,
  ListItem,
  useColorModeValue,
  Divider,
  Badge,
  Text
} from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Heading
          as={'h2'}
          variant={'page-title'}
          mb={4}
        >
          Modal Soul
        </Heading>
        <Section delay={0.1}>
          <Paragraph>
            Nujabes was without a doubt one of the most unique artists,
            masterfully and gracefully combining hip-hop and jazz.
            Modal Soul is arguably their best release in a discography that is
            pretty much perfect in this nieche subgenre of hip-hop.
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading
            as={'h2'}
            variant={'track-title'}
            display={'inline-block'}
          >
            1 - Feather&ensp;
          </Heading>
          <Badge bgColor={'rgba(215, 153, 33, 0.5)'} color={'#D79921'}>★★★★★</Badge>
          <Divider mb={4} />
          <Paragraph>
            Piano keys elegently open this track and in turn open this album beautifully.
            They're quickly tended to by very heartfelt rapping about letting go of life's worries.
            This perfectly sets the tone of the album and shows how competent Nujabes is at weaving
            gracefully complex jazz samples with a heavy rhythm and strong vocals.
          </Paragraph>
          <Heading
            as={'h2'}
            variant={'track-title'}
            display={'inline-block'}
          >
            2 - Ordinary Joe&ensp;
          </Heading>
          <Badge bgColor={'rgba(215, 153, 33, 0.5)'} color={'#D79921'}>★★★☆☆</Badge>
          <Divider mb={0} />
          <Heading
            as={'h2'}
            variant={'track-title'}
            display={'inline-block'}
          >
            3 - Reflection Eternal&ensp;
          </Heading>
          <Badge bgColor={'rgba(215, 153, 33, 0.5)'} color={'#D79921'}>★★★★☆</Badge>
          <Divider mb={4} />
          <Paragraph>
            Beautiful piano driven track, calmly brings out memories perfect for reminiscion.
            The subtle vocals really add to the calm yet uplifting nature of this track, makes
            the runtime fly by in a good and effortless way.
          </Paragraph>
        </Section>
      </Container>
    </Layout >
  )
}

export default Page
