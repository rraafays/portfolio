import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import {
  Title,
  Banner,
  Info,
  Repo
} from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Socks = () => {
  return (
    <Layout>
      <Container>
        <Title>
          socks <Badge>2022</Badge><Repo href={'https://github.com/rraafays/socks'}>github</Repo>
        </Title>
        <Paragraph>
          Socket based client-server messaging application I am currently working on
          while learning java as part of my Networked Software Development module at university.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Info>oper</Info><span>Linux, Mac OS, Windows</span>
          </ListItem>
          <ListItem>
            <Info>lang</Info><span>Java</span>
          </ListItem>
          <ListItem>
            <Info>flow</Info><span>vim, javac</span>
          </ListItem>
          <ListItem>
            <Info>form</Info><span>Chat Application</span>
          </ListItem>
        </List>
      </Container>
    </Layout >
  )
}

export default Socks