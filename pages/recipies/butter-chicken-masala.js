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
          <ListItem><MinusIcon />&ensp;garam masala - 2tsp</ListItem>
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
    </Container>
  )
}

export default Page
