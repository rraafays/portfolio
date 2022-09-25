import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import {
  Title,
  ProjectBanner,
  Info
} from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Pomo = () => {
  return (
    <Layout>
      <Container>
        <ProjectBanner src={'/images/projects/PomoThumb.png'} />
        <Title>
          pomo <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Lightweight terminal pomodoro timer used to help me learn new things!
          Done as my first C program both to put into practice what I have learnt
          and to help me continue learning C.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Info>platform</Info><span>Linux, Mac OS</span>
          </ListItem>
          <ListItem>
            <Info>language</Info><span>C</span>
          </ListItem>
          <ListItem>
            <Info>workflow</Info><span>Vim, CC</span>
          </ListItem>
          <ListItem>
            <Info>formfactor</Info><span>Terminal Application</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Pomo
