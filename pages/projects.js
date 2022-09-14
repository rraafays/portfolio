import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import WorkGridItem from '../components/grid-item'
import GentooThumb from ../

const Projects = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id={'Gentoo'} title={'Gentoo'} thumbnail={GentooThumb}>
            My portage configuration for my Gentoo Linux Development system
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
