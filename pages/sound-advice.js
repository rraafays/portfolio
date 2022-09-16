import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { PlaylistGridItem } from '../components/grid-item'

import SimmerSauté from '../public/images/playlists/simmer-sauté.jpeg'
import VroomVroom from '../public/images/playlists/vroom-vroom.jpeg'

const SoundAdvice = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
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
      </SimpleGrid>
    </Container>
  )
}

export default SoundAdvice 
