import NextLink from "next/link";
import {
    Box,
    Heading,
    Container,
    Text,
    Divider,
    Button,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const NotFound = () => {
    return (
        <Layout>
            <Container>
                <Heading as={"h1"} align={"center"} fontSize={"20vw"}>
                    404
                </Heading>
                <Text align={"center"}>
                    the world's just not ready for this page.
                </Text>
                <Divider my={6} />
                <Box my={6} align={"center"}>
                    <NextLink href={"/"}>
                        <Button>Home</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
};

export default NotFound;
