import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import InkBlotWoman from '../public/images/artworks/ink-blot-woman.jpeg'
import Untitled01 from '../public/images/artworks/untitled01.jpg'
import Untitled02 from '../public/images/artworks/untitled02.jpg'
const Artworks = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20}>
        Artworks
      </Heading>
      <p>Mediums used; ink, correction fluid, occasionally watercolours</p>
      <SimpleGrid columns={[1, 1, 2]} gap={6} paddingTop={4}>
        <Section>
          <GridItem
            title={'Ink Blot Woman'}
            thumbnail={InkBlotWoman}
          >
            16/07/21
          </GridItem>
        </Section>
        <Section>
          <GridItem
            title={'untitled'}
            thumbnail={Untitled01}
          >
            04/03/21
          </GridItem>
        </Section>
        <Section>
          <GridItem
            title={'untitled'}
            thumbnail={Untitled02}
          >
            23/03/21
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Artworks 
