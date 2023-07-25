import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import InkBlotWoman from "../public/images/artworks/ink-blot-woman.jpeg";
import Untitled01 from "../public/images/artworks/untitled01.jpg";
import Untitled02 from "../public/images/artworks/untitled02.jpg";
import Untitled03 from "../public/images/artworks/untitled03.jpg";
import Untitled04 from "../public/images/artworks/untitled04.jpg";
import Untitled05 from "../public/images/artworks/untitled05.jpg";
import Untitled06 from "../public/images/artworks/untitled06.jpg";
import Untitled07 from "../public/images/artworks/untitled07.jpg";

const Artworks = () => {
    return (
        <Layout>
            <Container>
                <Heading as={"h3"} fontSize={20}>
                    Artworks
                </Heading>
                <p>
                    Mediums used; ink, correction fluid, occasionally
                    watercolours
                </p>
                <SimpleGrid columns={[1, 1, 2]} gap={6} paddingTop={4}>
                    <Section>
                        <GridItem
                            title={"Ink Blot Woman"}
                            thumbnail={InkBlotWoman}
                        >
                            16/07/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled01}>
                            04/03/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled02}>
                            23/03/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled03}>
                            04/06/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled04}>
                            20/01/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled05}>
                            00/00/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled06}>
                            22/04/21
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem title={"untitled"} thumbnail={Untitled07}>
                            22/07/21
                        </GridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Artworks;
