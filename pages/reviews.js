import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ReviewGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import ModalSoul from '../public/images/reviews/modal-soul.jpeg'
import Ramona from '../public/images/reviews/ramona.png'

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
          My desire to reminisce and discover various pieces of art, such as music and videogames with continously
          improving technology is what drives my passion for these artforms and technology to consume said artforms.
          To spread these experiences I strive to share and document these experience on this webpage.
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
          <Section>
            <ReviewGridItem
              id={'ramona'}
              title={'RAMONA'}
              cover={Ramona}
            >
              Kill Bill
            </ReviewGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default SoundAdvice 
