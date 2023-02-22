import {
  Badge,
  Container,
  Heading,
  List,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  Title,
  Banner,
  Step,
  Ingredient
} from '../../components/recipe'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Banner src={'/images/recipes/eomuk-bokkeum.jpeg'}></Banner>
        <Title>
          Eomuk Bokkeum{' '}
          <Badge bgColor={'rgba(204, 36, 29, 0.3)'}>🌶️🌶️</Badge>
        </Title>
        <SimpleGrid columns={[1, 1, 1]}>
          <List mb={4}>
            <Ingredient name={'eomuk (korean fishcake)'} quantity={'2sheets'} />
            <Ingredient name={'small onion'} quantity={'1'} />
            <Ingredient name={'green chili'} quantity={'2'} />
            <Ingredient name={'garlic clove'} quantity={'1'} />
            <Ingredient name={'spring onion'} quantity={'2'} />
            <Ingredient name={'green pepper'} quantity={'1/2'} />
            <Ingredient name={'gochujang'} quantity={'1tbsp'} />
            <Ingredient name={'honey'} quantity={'1tbsp'} />
          </List>
        </SimpleGrid>
        <Section delay={0.1}>
          <Step stepN={1}>
            before chopping the vegetables put two sheets of eomuk in a bowl, let them soak in boiling water whether it is frozen or not and add a pinch of salt and white pepper to enhance flavour
          </Step>
          <Step stepN={2}>
            dice the onions, chop the spring onion into rings or diagonally into blades if you feel fancy, chop the pepper or any other crunchy vegetables into cubes, chop the green chilis, mince the garlic
          </Step>
          <Step stepN={3}>
            pour a litte oil into the pan, do not use olive oil, add the eomuk and stir fry until light golden brown. Then add the onions, once the onions have begun to caramelise add the rest of the vegetables, replenish oil as needed using as little as possible
          </Step>
          <Step stepN={4}>
            lower the heat and push all the contents of the pan to the edges, add a little more oil to the center, add a tablespoon of gochujang and a tablespoon of honey, stir fry until the whole pan is covered in the sauce, add soy sauce to taste
          </Step>
          <Step stepN={5}>
            garnish with sesame seeds and serve with rice, can also be eaten cold in a lunchbox
          </Step>
          <Step stepN={6}>
            enjoy with a can of bongbong
          </Step>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
