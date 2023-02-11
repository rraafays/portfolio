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

const GentooSystem = () => {
  return (
    <Layout>
      <Container>
        <Banner src={'/images/projects/GentooThumb.png'} />
        <Title>
          Raf's Gentoo <Badge>2022</Badge><Repo href={'https://github.com/rraafays/gentoo'}>github</Repo>
        </Title>
        <Paragraph>
          My personal portage configuration for my Gentoo Linux development system.
          The goals of my configuration is to be as lean and as performant as possible while
          maintaining high compatability with various different development tools.
          Since I use neovim to code I have minimal support for graphical applications.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Info>oper</Info><span>Linux</span>
          </ListItem>
          <ListItem>
            <Info>lang</Info><span>sh</span>
          </ListItem>
          <ListItem>
            <Info>flow</Info><span>vim, cc</span>
          </ListItem>
          <ListItem>
            <Info>form</Info><span>Operating System Configuration</span>
          </ListItem>
        </List>
      </Container>
    </Layout >
  )
}

export default GentooSystem
