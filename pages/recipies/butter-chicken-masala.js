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
          <ListItem><MinusIcon />&ensp;chili powder - 1tsp</ListItem>
          <ListItem><MinusIcon />&ensp;salt - 1tsp</ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Page
