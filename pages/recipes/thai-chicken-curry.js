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
        <Banner src={'/images/recipes/thai-chicken-curry.jpeg'}></Banner>
        <Title>
          Thai Chicken Curry{' '}
          <Badge bgColor={'rgba(204, 36, 29, 0.3)'}>🌶️</Badge>
          <Badge bgColor={'rgba(215, 153, 33, 0.3)'} color={'#D79921'}>dairy</Badge>
        </Title>
        <SimpleGrid columns={[1, 1, 2]}>
          <List mb={4}>
            <Heading
              fontSize={20}
              mb={4}
            >
              Marinade
            </Heading>
            <Ingredient name={'chicken breasts'} quantity={'1'} />
            <Ingredient name={'coconut milk'} quantity={'2tbsp'} />
            <Ingredient name={'brown sugar'} quantity={'1tbsp'} />
            <Ingredient name={'thai red curry paste'} quantity={'2tbsp'} />
            <Ingredient name={'sweet soy sauce'} quantity={'1tsp'} />
            <Ingredient name={'salt'} quantity={'1tsp'} />
            <Ingredient name={'vegetable oil'} quantity={'2tsp'} />
            <Ingredient name={'chilli powder'} quantity={'1tsp'} />
            <Ingredient name={'minced garlic'} quantity={'1tsp'} />
          </List>
          <List mb={4}>
            <Heading
              fontSize={20}
              mb={4}
            >
              Sauce
            </Heading>
            <Ingredient name={'coconut milk'} quantity={'1cup'} />
            <Ingredient name={'sweet soy sauce'} quantity={'2tbsp'} />
            <Ingredient name={'brown sugar'} quantity={'1tbsp'} />
            <Ingredient name={'thai red curry paste'} quantity={'2tbsp'} />
            <Ingredient name={'chilli powder'} quantity={'2tsp'} />
            <Ingredient name={'salt'} quantity={'1tsp'} />
          </List>
        </SimpleGrid>
        <Section delay={0.1}>
          <Step stepN={1}>
            butterfly the chicken breasts combine all marinade ingredients and let it rest  for at least 30 min or more (if time allows)
          </Step>
          <Step stepN={2}>
            heat the pan on high heat, in a separate pot or saucepan add all sauce ingredients, bring it to a boil then reduce the heat and let simmer until sauce has thickened, once thickened take off of heat
          </Step>
          <Step stepN={3}>
            flick water onto the pan if it sizzles instantly then the pan is ready, sear each side of the butterfly breasts until browned (should take 5ish minutes on each side)
          </Step>
          <Step stepN={4}>
            then add enough water to cover the surface of the pan and let steam for about 10 minutes, replenish the water as it evaporates
          </Step>
          <Step stepN={5}>
            let the chicken rest for a couple minutes off the pan before plating and pouring the sauce either over it or on the side
          </Step>
          <Step stepN={8}>
            enjoy with a can of fanta
          </Step>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
