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
import Layout from '../../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h2'} variant={'page-title'}>
          Modal Soul
        </Heading>
        <p>Nujabes magnum opus?</p>
      </Container>
    </Layout>
  )
}

export default Page
