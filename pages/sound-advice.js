import { Container, Heading, SimpleGrid, Divider, Badge, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { PlaylistGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import SimmerSauté from '../public/images/playlists/simmer-sauté.jpeg'
import VroomVroom from '../public/images/playlists/vroom-vroom.jpeg'
import Sonatine from '../public/images/playlists/sonatine.jpeg'

const SoundAdvice = () => {
  return (
    <Layout>
      <Container>
        <Paragraph>
          My desire to reminisce and discover music with continously improving technology
          is what drives my passion for both music and high end audio equipment.
          To spread these experiences I strive to share and receive what I like to call
          sound advice in hopes of both broading and affirming my collection.
        </Paragraph>
        <Heading as={'h3'} fontSize={20} mb={4} my={4}>
          Playlists
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <PlaylistGridItem
              href={'https://open.spotify.com/playlist/0sRSvuT8rmP126RI8f1sbf'}
              title={'simmer sauté'}
              thumbnail={SimmerSauté}
            >
              sweet relaxing tunes
            </PlaylistGridItem>
          </Section>
          <Section>
            <PlaylistGridItem
              href={'https://open.spotify.com/playlist/1E6dm0MGjOquqPwTshRic4'}
              title={'vroom vroom'}
              thumbnail={VroomVroom}
            >
              drifting between cities
            </PlaylistGridItem>
          </Section>
          <Section>
            <PlaylistGridItem
              href={'https://open.spotify.com/playlist/6HFj5io9wjiDZa5v9EIBrW'}
              title={'sonatine'}
              thumbnail={Sonatine}
            >
            </PlaylistGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default SoundAdvice 
