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
} from '../../components/recipie'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Banner src={'/images/recipies/korean-fried-chicken.jpeg'}></Banner>
        <Title>
          Korean Fried Chicken{' '}
          <Badge bgColor={'rgba(204, 36, 29, 0.3)'}>🌶️🌶️</Badge>
          <Badge bgColor={'rgba(215, 153, 33, 0.3)'} color={'#D79921'}>~dairy</Badge>
          <Badge bgColor={'rgba(146, 131, 116, 0.3)'} color={'#928374'}>~peanuts</Badge>
        </Title>
        <SimpleGrid columns={[1, 1, 2]}>
          <List mb={4}>
            <Heading
              fontSize={20}
              mb={4}
            >
              Marinade
            </Heading>
            <Ingredient name={'chicken thighs'} quantity={'350g'} />
            <Ingredient name={'soy sauce'} quantity={'1/2tbsp'} />
            <Ingredient name={'water'} quantity={'2tbsp'} />
            <Ingredient name={'salt'} quantity={'1/2tbsp'} />
            <Ingredient name={'pepper'} quantity={'1/2tsp'} />
            <Ingredient name={'chilli powder'} quantity={'2tsp'} />
          </List>
          <List mb={4}>
            <Heading
              fontSize={20}
              mb={4}
            >
              Batter
            </Heading>
            <Ingredient name={'potato starch'} quantity={'2tbsp'} />
            <Ingredient name={'all purpose flour'} quantity={'1tbsp'} />
            <Ingredient name={'rice flour'} quantity={'1tbsp'} />
          </List>
          <List mb={4}>
            <Heading
              fontSize={20}
              mb={4}
            >
              ~Sauce
            </Heading>
            <Ingredient name={'gochujang'} quantity={'1/2tbsp'} />
            <Ingredient name={'soy sauce'} quantity={'1tbsp'} />
            <Ingredient name={'water'} quantity={'1tbsp'} />
            <Ingredient name={'ketchup'} quantity={'1tbsp'} />
            <Ingredient name={'honey'} quantity={'1tbsp'} />
            <Ingredient name={'sugar'} quantity={'1tbsp'} />
            <Ingredient name={'chilli oil'} quantity={'1tbsp'} />
          </List>
          <List mb={4}>
            <Heading
              fontSize={20}
              mb={4}
            >
              ~Mayonaise
            </Heading>
            <Ingredient name={'gochujang'} quantity={'1tbsp'} />
            <Ingredient name={'soy sauce'} quantity={'1tsp'} />
            <Ingredient name={'boiling water'} quantity={'1tbsp'} />
            <Ingredient name={'mayonaise'} quantity={'1/2cup'} />
          </List>
        </SimpleGrid>
        <Section delay={0.1}>
          <Step stepN={1}>
            prepare the chicken. add soy, water, sugar, salt, and black pepper. let the mixture marinate for at least 30 minutes
          </Step>
          <Step stepN={2}>
            add potato starch, flour, rice flour, chilli powder to the chicken and mix it up
          </Step>
          <Step stepN={3}>
            using a thick pot pour oil until half way heat until oil reaches 170c (frying twice, once at a lower temperature around 160c and again at 180c. you want the oil to be higher because the temperature will drop once we put the chicken in)
          </Step>
          <Step stepN={4}>
            gently drop the battered chicken into the oil. agitate the chicken to make sure it fries evenly. fry until pale golden brown
          </Step>
          <Step stepN={5}>
            sieve the chicken pieces out and place on wire shake excess oil off. refry the chicken at 180c for a few minutes until golden brown
          </Step>
          <Step stepN={6}>
            combine gochujang, soy sauce, water, ketchup, honey, sugar and chilli oil to make the sauce. pour it over the chicken then toss it
          </Step>
          <Step stepN={7}>
            finally garnish with crushed peanuts, sesame seeds, spring onions
          </Step>
          <Step stepN={8}>
            enjoy with a can of coke
          </Step>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
