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

const Pomo = () => {
  return (
    <Layout>
      <Container>
        <Banner src={'/images/projects/PomoThumb.png'} />
        <Title>
          pomo <Badge>2022</Badge><Repo href={'https://github.com/rraafays/pomo'}>github</Repo>
        </Title>
        <Paragraph>
          Lightweight and performant terminal pomodoro timer written in rust!
          I regularly use this program to help me learn and be more productive when 
          interacting with my computer on a daily basis.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Info>oper</Info><span>Linux, Mac OS, Windows</span>
          </ListItem>
          <ListItem>
            <Info>lang</Info><span>Rust</span>
          </ListItem>
          <ListItem>
            <Info>flow</Info><span>vim, cargo</span>
          </ListItem>
          <ListItem>
            <Info>form</Info><span>Terminal Application</span>
          </ListItem>
        </List>
      </Container>
    </Layout >
  )
}

export default Pomo
