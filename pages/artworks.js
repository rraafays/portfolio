import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import InkBlotWoman from '../public/images/artworks/ink-blot-woman.jpeg'

const Artworks = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
        Artworks
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridItem
            title={'Ink Blot Woman'}
            thumbnail={InkBlotWoman}
          >
            16/07/2021
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Artworks 
