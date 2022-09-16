import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Heading as={'h2'} variant={'page-title'}>
        Murgh Makhani Masala
      </Heading>
      <p>Easy aromatic butter chicken to enjoy on a hot evening</p>
      <Section delay={0.1}>
        <Heading as={'h3'} variant={'section-title'}>
          Marinade
        </Heading>
        <List>
          <ListItem><MinusIcon />&ensp;bite sized chicken thighs - 800g</ListItem>
          <ListItem><MinusIcon />&ensp;yogurt - 1/2 cup</ListItem>
          <ListItem><MinusIcon />&ensp;minced garlic - 1 1&2tbsp</ListItem>
          <ListItem><MinusIcon />&ensp;minced ginger - 1tbsp</ListItem>
          <ListItem><MinusIcon />&ensp;gurram masala - 2tsp</ListItem>
          <ListItem><MinusIcon />&ensp;tumeric - 1tsp</ListItem>
          <ListItem><MinusIcon />&ensp;cumin - 1tsp</ListItem>
          <ListItem><MinusIcon />&ensp;chilli powder - 1tsp</ListItem>
          <ListItem><MinusIcon />&ensp;salt - 1tsp</ListItem>
        </List>
      </Section>
      <Section delay={0.1}>
        <Heading as={'h3'} variant={'section-title'}>
          Shorba
        </Heading>
        <List>
          <ListItem><MinusIcon />&ensp;olive oil - 2tbsp</ListItem>
          <ListItem><MinusIcon />&ensp;ghee - 2tbsp (butter - 1tbsp + oil - 1tbsp)</ListItem>
          <ListItem><MinusIcon />&ensp;diced onion - 1 large</ListItem>
          <ListItem><MinusIcon />&ensp;minced garlic - 1tbsp</ListItem>
          <ListItem><MinusIcon />&ensp;minced ginger - 1tbsp</ListItem>
          <ListItem><MinusIcon />&ensp;cumin - 2tsp</ListItem>
          <ListItem><MinusIcon />&ensp;gurram masala - 2tsp</ListItem>
          <ListItem><MinusIcon />&ensp;chilli powder - 2tsp</ListItem>
          <ListItem><MinusIcon />&ensp;salt - 1tsp</ListItem>
          <ListItem><MinusIcon />&ensp;coconut milk - 1 cup</ListItem>
          <ListItem><MinusIcon />&ensp;sugar - 1tbsp</ListItem>
          <ListItem><MinusIcon />&ensp;fenugreek seeds - 1/2tbsp</ListItem>
        </List>
      </Section>
      <Section delay={0.2}>
        <Paragraph>
          <b>1</b>&emsp;in a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 30 minutes to an hour (or overnight if time allows)
        </Paragraph>
        <Paragraph>
          <b>2</b>&emsp;heat oil in a large pot over medium-high heat. When sizzling, add chicken pieces in batches making sure not to crowd the pot. Fry until browned for only 3 minutes on each side. Set aside and keep warm. (you will finish cooking the chicken in the sauce.)
        </Paragraph>
        <Paragraph>
          <b>3</b>&emsp;heat butter or ghee in the same pot. Fry the onions until they start to brown (about 6 minutes) while scraping up any shrunken bits stuck on the bottom of the pot
        </Paragraph>
        <Paragraph>
          <b>4</b>&emsp;add garlic and ginger and sauté for 1 minute until fragrant, then add ground coriander, cumin and gurram masala. Let cook for about 20 seconds until fragrant, while stirring occasionally
        </Paragraph>
        <Paragraph>
          <b>5</b>&emsp;add crushed tomatoes, chili powder and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour
        </Paragraph>
        <Paragraph>
          <b>6</b>&emsp;pour the puréed sauce back into the pot. Stir the cream, sugar and crushed kasoori methi (or fenugreek leaves) through the sauce. Add the chicken with juices back into the pot and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling
        </Paragraph>
        <Paragraph>
          <b>7</b>&emsp;garnish with chopped coriander and serve with fresh, naan
        </Paragraph>
        <Paragraph>
          <b>8</b>&emsp;enjoy with a can of mirinda
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
