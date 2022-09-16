import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import GentooThumb from '../public/images/projects/GentooThumb.png'

const Projects = () => {
  return (
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
            My portage configuration for my Gentoo Linux Development system
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
