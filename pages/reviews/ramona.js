import { Container } from "@chakra-ui/react";
import { Title, Banner, Track } from "../../components/review";
import Section from "../../components/section";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Banner src={"/images/reviews/ramona.png"} />
                <Title>RAMONA</Title>
                <Section delay={0.1}>
                    <Paragraph>
                        Kill Bill was a name I'd never heard of until they were
                        mentioned in a random comment on a album I'd stumbled
                        upon on YouTube. I love discovering music this way, the
                        comment that lead me to listen and lead me to write this
                        review was 'Finding Rav and kill bill over quarantine
                        was the luckiest thing that ever happened to me'
                    </Paragraph>
                </Section>
                <Section delay={0.1}>
                    <Track n={"1"} title={"Backwoods"} stars={"★★★★★"}>
                        Backwoods is a perfect introduction to Kill Bill's
                        introspective tight flow. The samples used here are
                        top-notch and complement Kill Bill's rapping so well In
                        this relatively short song he expresses so much in such
                        a concise manor which never fails to captivate me on
                        each consecutive listen.
                    </Track>
                    <Track n={2} title={"Hola"} stars={"★★★★☆"}></Track>
                    <Track n={3} title={"FVCK"} stars={"★★★★☆"}>
                        Featuring the saddest rhymes and an almost trip hop
                        level of slow beats this is one of my favourite songs on
                        this release. The beats are mesmerizing and must have
                        felt especially unique in context of the time this album
                        was released. I do wish this song was a bit longer and
                        that the ending was used as more of a break that leads
                        to more vocals from Kill Bill.
                    </Track>
                    <Track n={4} title={"Chinatown"} stars={"★★★☆☆"}></Track>
                    <Track
                        n={5}
                        title={"Dream Eater (Feat. Rav x Recahdam)"}
                        stars={"★★★★★"}
                    >
                        This is by far the most sombre song in this album,
                        feeling like a perfect continuation of Chinatown. Kill
                        Bill, Rav & Recahdam are both reminiscing over a girl
                        the samples are perfect and the whole package almost
                        reminds me of a more chill take on Souls of Mischief's
                        'Step to My Girl' which is without a doubt one of my
                        absolute favourite songs, this song is no different.
                    </Track>
                    <Track n={6} title={"Black Coffee"} stars={"★★★★★"}>
                        Black Coffee might possibly my absolute favourite song
                        in this already strong album, this song tells a story
                        possibly about the same girl and Kill Bill's drifting
                        feelings. The beat is so up my alley reminding me of a
                        more spacey take on Nujabes. Lyrically this song is so
                        relatable, he's regretting and judging his decisions.
                    </Track>
                    <Track
                        n={7}
                        title={"Then There's Me"}
                        stars={"★★★★☆"}
                    ></Track>
                    <Track
                        n={8}
                        title={"Conversations with Gravity"}
                        stars={"★★★★★"}
                    ></Track>
                    <Track
                        n={9}
                        title={"水 水 水 (Feat. JINZO THE TRAP LORD)"}
                        stars={"★★★☆☆"}
                    ></Track>
                    <Track
                        n={10}
                        title={"Abandoned 2 (Feat. Rav)"}
                        stars={"★★★★☆"}
                    ></Track>
                    <Track n={11} title={"Pork (Feat. Rav)"} stars={"★★★★☆"}>
                        Beautiful violin samples are used in this track, Kill
                        Bill's lyrics are talking about his different path in
                        life and lack of support from family and friends. This
                        is one of the rare cases where I like Rav's vocals he
                        sounds much better with a slow flow.
                    </Track>
                    <Track n={12} title={"Good Luck Chuck"} stars={"★★★★★"}>
                        Narratively driven, this track tells a tragic story of a
                        med student who got into stripping and eventually met a
                        wolf in sheep's clothing called chuck. Kill Bill really
                        gives a much darker tone fitting for the theme of track.
                    </Track>
                    <Track
                        n={13}
                        title={"4:37 P.M. [Subspace]"}
                        stars={"★★☆☆☆"}
                    ></Track>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
