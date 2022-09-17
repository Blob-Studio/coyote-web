import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';
import Marquee from "react-fast-marquee";

const Header = (props : any) => {
    return (
        <StyledHeader flexDirection={'column'}>
            <Flex className="top-bar" alignItems="center">
                <Marquee gradient={false} speed={50}>
                    WE CREATE COMPELLING WEB EXPERIENCES - サイバースペースを通じて共鳴する - WE MAKE SEAMLESS INTERACTIVE STORIES FOR END USERS - サイバースペースを通じて共鳴する
                </Marquee>
            </Flex>
            <Flex px="1rem" className="title-bar" alignItems={"center"}>
                <h1 className="title">COYOTE <span className="outlined">WEB STUDIO</span></h1>
                <Text as={"p"} sx={{
                    fontSize: "5rem",
                    marginLeft: "2rem",
                    position: "relative",
                    top: "-0.5rem"
                }}>/</Text>
                <Flex className="jp-text" flexDirection="column">
                    <Box>ウェブデザイン</Box>
                    <Box className="outlined">ウェブ開発</Box>
                </Flex>
            </Flex>
        </StyledHeader>
    )
}

const StyledHeader = styled(Flex)`
    grid-area: header;
    .top-bar,
    .title-bar {
        width: 100%;
        border-bottom: calc(1rem / 16) solid ${props => props.theme.color.primary};
        font-weight: 600;
    }
    .top-bar {
        grid-area: top-bar;
        height: 3rem;
        font-size: 1.5rem;
        padding: 0;
    }
    .title-bar {
        height: 8rem;
        .title {
            font-size: 6vmin;
        }
        .jp-text {
            filter: drop-shadow(1rem 1rem 30rem ${props => props.theme.color.primary});
            font-size: 2rem;
            font-weight: 600;
            margin-left: 2rem;
        }
    }
`;

export default Header;