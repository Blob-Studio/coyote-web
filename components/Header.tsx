import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import Marquee from "react-fast-marquee";

const Header = (props : any) => {
    return (
        <StyledHeader flexDirection={'column'} width={"100%"}>
            <Flex className="top-bar" alignItems="center">
                <Marquee gradient={false} speed={50}>
                    RESONATE THROUGH CYBERSPACE - サイバースペースを通じて共鳴する - RESONATE THROUGH CYBERSPACE - サイバースペースを通じて共鳴する - RESONATE THROUGH CYBERSPACE - サイバースペースを通じて共鳴する - RESONATE THROUGH CYBERSPACE - サイバースペースを通じて共鳴する - 
                </Marquee>
            </Flex>
            <Flex px="1rem" className="title-bar" justifyContent={'space-between'} alignItems={"center"}>
                <h1 className="title">COYOTE <span className="outlined">WEB STUDIO</span></h1>
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
        border-bottom: calc(1rem / 16) solid ${props => props.theme.color.primary};
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
            font-size: 6rem;
        }
        .jp-text {
            font-size: 2rem;
            font-weight: 600;
        }
    }
`;

export default Header;