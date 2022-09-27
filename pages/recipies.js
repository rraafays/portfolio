import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { RecipieGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import ButterChickenThumb from '../public/images/recipies/butter-chicken-masala-1-1.jpeg'
import KoreanFriedChickenThumb from '../public/images/recipies/korean-fried-chicken.jpeg'

const Recipies = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Recipies
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <RecipieGridItem
              id={'butter-chicken-masala'}
              title={'Murgh Makhani Masala'}
              thumbnail={ButterChickenThumb}
            >
              Flavourful one-pot butter chicken masala
            </RecipieGridItem>
          </Section>
          <Section>
            <RecipieGridItem
              id={'korean-fried-chicken'}
              title={'Korean Fried Chicken'}
              thumbnail={KoreanFriedChickenThumb}
            >
              Crispy, spicy fried chicken with korean style gochujang sauce or spicy mayo
            </RecipieGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Recipies
