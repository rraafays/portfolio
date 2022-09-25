import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ReviewGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import ModalSoul from '../public/images/reviews/modal-soul.jpeg'

const SoundAdvice = () => {
  return (
    <Layout>
      <Container>
        <Heading
          as={'h1'}
          variant={'section-title'}
        >
          Motivation
        </Heading>
        <Paragraph>
          My desire to reminisce and discover music with continously improving technology
          is what drives my passion for both music and high end audio equipment.
          To spread these experiences I strive to share and receive what I like to call
          sound advice in hopes of both broading and affirming my collection.
        </Paragraph>
        <Heading
          as={'h3'}
          variant={'section-title'}
        >
          Reviews
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} paddingTop={4}>
          <Section>
            <ReviewGridItem
              id={'modal-soul'}
              title={'Modal Soul'}
              cover={ModalSoul}
            >
              Nujabes
            </ReviewGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default SoundAdvice 
