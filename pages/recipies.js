import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { RecipieGridItem } from '../components/grid-item'
import ButterChickenThumb from '../public/images/recipies/butter-chicken-masala-1-1.jpeg'

const Recipies = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
        Recipies
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <RecipieGridItem
            id={'butter-chicken-masala'}
            title={'Murgh Makhani Masala'}
            thumbnail={ButterChickenThumb}>
            Flavourful one-pot butter chicken masala
          </RecipieGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Recipies
