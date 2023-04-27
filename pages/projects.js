import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import GentooThumb from '../public/images/projects/GentooThumb.png'
import PomoThumb from '../public/images/projects/PomoThumb.png'
import SocksThumb from '../public/images/projects/SocksThumb.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              id={'gentoo-system'}
              title={'Gentoo System'}
              thumbnail={GentooThumb}
            >
              Personal portage configuration for my Gentoo Linux Development system
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id={'pomo'}
              title={'pomo'}
              thumbnail={PomoThumb}
            >
              Terminal pomodoro timer written in Rust
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              id={'socks'}
              title={'socks'}
              thumbnail={SocksThumb}
            >
              Multithreaded client-server messaging application written in Java
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
