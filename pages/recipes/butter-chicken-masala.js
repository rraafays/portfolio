import { Badge, Container, Heading, List, SimpleGrid } from "@chakra-ui/react";
import { Title, Banner, Step, Ingredient } from "../../components/recipe";
import Section from "../../components/section";
import Layout from "../../components/layouts/article";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Banner
                    src={"/images/recipes/butter-chicken-masala-1-1.jpeg"}
                ></Banner>
                <Title>
                    Murgh Makhani Masala{" "}
                    <Badge bgColor={"rgba(204, 36, 29, 0.3)"}>🌶️🌶️</Badge>
                    <Badge
                        bgColor={"rgba(215, 153, 33, 0.3)"}
                        color={"#D79921"}
                    >
                        dairy
                    </Badge>
                </Title>
                <SimpleGrid columns={[1, 1, 2]}>
                    <List mb={4}>
                        <Heading fontSize={20} mb={4}>
                            Marinade
                        </Heading>
                        <Ingredient
                            name={"bite sized chicken thighs"}
                            quantity={"800g"}
                        />
                        <Ingredient
                            name={"natural yogurt"}
                            quantity={"1/2cup"}
                        />
                        <Ingredient name={"minced garlic"} quantity={"2tbsp"} />
                        <Ingredient name={"minced ginger"} quantity={"2tbsp"} />
                        <Ingredient name={"gurram masala"} quantity={"2tsp"} />
                        <Ingredient name={"tumeric"} quantity={"1tsp"} />
                        <Ingredient name={"cumin"} quantity={"1tsp"} />
                        <Ingredient name={"chilli powder"} quantity={"1tsp"} />
                        <Ingredient name={"salt"} quantity={"1tsp"} />
                    </List>
                    <List mb={4}>
                        <Heading fontSize={20} mb={4}>
                            Shorba
                        </Heading>
                        <Ingredient name={"olive oil"} quantity={"2tbsp"} />
                        <Ingredient
                            name={"crushed tomatoes"}
                            quantity={"400g"}
                        />
                        <Ingredient
                            name={"ghee (butter + oil)"}
                            quantity={"2tbsp"}
                        />
                        <Ingredient name={"diced onion"} quantity={"1large"} />
                        <Ingredient name={"minced garlic"} quantity={"1tbsp"} />
                        <Ingredient name={"minced ginger"} quantity={"1tbsp"} />
                        <Ingredient name={"cumin"} quantity={"2tsp"} />
                        <Ingredient name={"gurram masala"} quantity={"2tsp"} />
                        <Ingredient name={"chilli powder"} quantity={"2tsp"} />
                        <Ingredient name={"salt"} quantity={"1tsp"} />
                        <Ingredient name={"coconut milk"} quantity={"1cup"} />
                        <Ingredient name={"sugar"} quantity={"1tbsp"} />
                        <Ingredient
                            name={"fenugreek seeds"}
                            quantity={"1/2tbsp"}
                        />
                    </List>
                </SimpleGrid>
                <Section delay={0.1}>
                    <Step stepN={1}>
                        in a bowl, combine chicken with all of the ingredients
                        for the chicken marinade; let marinate for 30 minutes to
                        an hour (or overnight if time allows)
                    </Step>
                    <Step stepN={2}>
                        heat oil in a large pot over medium-high heat. When
                        sizzling, add chicken pieces in batches making sure not
                        to crowd the pot. Fry until browned for only 3 minutes
                        on each side. Set aside and keep warm. (you will finish
                        cooking the chicken in the sauce.)
                    </Step>
                    <Step stepN={3}>
                        heat butter or ghee in the same pot. Fry the onions
                        until they start to brown (about 6 minutes) while
                        scraping up any shrunken bits stuck on the bottom of the
                        pot
                    </Step>
                    <Step stepN={4}>
                        add garlic and ginger and sauté for 1 minute until
                        fragrant, then add ground coriander, cumin and gurram
                        masala. Let cook for about 20 seconds until fragrant,
                        while stirring occasionally
                    </Step>
                    <Step stepN={5}>
                        add crushed tomatoes, chili powder and salt. Let simmer
                        for about 10-15 minutes, stirring occasionally until
                        sauce thickens and becomes a deep brown red colour
                    </Step>
                    <Step stepN={6}>
                        pour the puréed sauce back into the pot. Stir the cream,
                        sugar and crushed kasoori methi (or fenugreek leaves)
                        through the sauce. Add the chicken with juices back into
                        the pot and cook for an additional 8-10 minutes until
                        chicken is cooked through and the sauce is thick and
                        bubbling
                    </Step>
                    <Step stepN={7}>
                        garnish with chopped coriander and serve with fresh,
                        naan
                    </Step>
                    <Step stepN={8}>enjoy with a can of mirinda</Step>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
