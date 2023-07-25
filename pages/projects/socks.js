import { Container, Badge, List, ListItem } from "@chakra-ui/react";
import { Title, Banner, Info, Repo } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Socks = () => {
    return (
        <Layout>
            <Container>
                <Banner src={"/images/projects/SocksThumb.png"} />
                <Title>
                    socks <Badge>2022</Badge>
                    <Repo href={"https://github.com/rraafays/socks"}>
                        github
                    </Repo>
                </Title>
                <Paragraph>
                    Socket based client-server chat application which uses JSON
                    protocols as per my university's Networked Software
                    Development module assignment specification.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Info>oper</Info>
                        <span>Linux, Mac OS, Windows</span>
                    </ListItem>
                    <ListItem>
                        <Info>lang</Info>
                        <span>Java</span>
                    </ListItem>
                    <ListItem>
                        <Info>flow</Info>
                        <span>vim, javac, gradle, gcc</span>
                    </ListItem>
                    <ListItem>
                        <Info>form</Info>
                        <span>Chat Application</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Socks;
