import { Container, Heading, SimpleGrid, Divider, Th } from '@chakra-ui/react'
import Section from '../components/section'
import { RecipeGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import ButterChickenThumb from '../public/images/recipes/butter-chicken-masala-1-1.jpeg'
import KoreanFriedChickenThumb from '../public/images/recipes/korean-fried-chicken.jpeg'
import ThaiChickenCurry from '../public/images/recipes/thai-chicken-curry.jpeg'

const Recipes = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Recipes
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <RecipeGridItem
              id={'butter-chicken-masala'}
              title={'Murgh Makhani Masala'}
              thumbnail={ButterChickenThumb}
            >
              Flavourful one-pot butter chicken masala
            </RecipeGridItem>
          </Section>
          <Section>
            <RecipeGridItem
              id={'korean-fried-chicken'}
              title={'Korean Fried Chicken'}
              thumbnail={KoreanFriedChickenThumb}
            >
              Crispy, spicy fried chicken with korean style gochujang sauce or spicy mayo
            </RecipeGridItem>
          </Section>
          <Section>
            <RecipeGridItem
              id={'thai-chicken-curry'}
              title={'Thai Chicken Curry'}
              thumbnail={ThaiChickenCurry}
            >
              Sweet, spicy and juicy thai chicken curry with creamy thai red sauce
            </RecipeGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Recipes
