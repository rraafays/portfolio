import {
  Container,
  Badge,
  List,
  ListItem,
  Link
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
          Lightweight terminal pomodoro timer used to help me learn new things!
          Done as my first C program both to put into practice what I have learnt
          and to help me continue learning C.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Info>oper</Info><span>Linux, Mac OS</span>
          </ListItem>
          <ListItem>
            <Info>lang</Info><span>C</span>
          </ListItem>
          <ListItem>
            <Info>flow</Info><span>Vim, CC</span>
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
