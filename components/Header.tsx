import Link from 'next/link';
import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';
import Marquee from 'react-fast-marquee';
import theme from '../utils/theme';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = (props: any) => {
  const r = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <StyledHeader flexDirection={'column'} className="header">
      <Flex className="top-bar">
        <Marquee gradient={false} speed={25} direction={'right'}>
          - WE CREATE COMPELLING WEB EXPERIENCES - サイバースペースを通じて共鳴する - WE CRAFT SEAMLESS INTERACTIVE STORIES FOR END USERS -
          サイバースペースを通じて共鳴する
        </Marquee>
      </Flex>
      <Flex className="title-bar">
        <Link href="/">
          <Box>
            <Marquee gradient={false} speed={25} direction={'left'}>
              <MarqueeContent />
              <MarqueeContent />
              <MarqueeContent />
            </Marquee>
          </Box>
        </Link>
        {r.asPath != '/' && (
          <Box 
            className="mobile-menu-toggle"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <div className={`hamburger-toggle ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Box>
          )
        }
        </Flex>
    </StyledHeader>
  );
};

const MarqueeContent = () => {
  return (
    <div className="title-bar-content">
      <Text as="h1" className="title">
        COYOTE <span className="outlined">WEB STUDIO</span>
      </Text>
      <Text as={'p'} className="divider">
        /
      </Text>
      <Flex className="jp-text" flexDirection="column">
        <Box>ウェブデザイン</Box>
        <Box className="outlined">ウェブ開発</Box>
      </Flex>
    </div>
  );
};

const StyledHeader = styled(Flex)`
  grid-area: header;
  border-bottom: 0.1rem solid ${(p) => p.theme.colors.primary};
  .top-bar {
    font-size: 1.5rem;
    padding: 0;
    font-weight: 600;
    align-items: center;
    color: ${(p) => p.theme.colors.font};
    background-color: ${(p) => p.theme.colors.primary};
  }
  .title-bar {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    .mobile-menu-toggle {
      display: none;
    }
  }
  .title-bar-content {
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 6rem;
  }
  .jp-text {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 2rem;
  }
  .divider {
    font-size: 5rem;
    margin-left: 2rem;
    position: relative;
    top: -0.5rem;
    font-weight: 600;
  }
  @media screen and (${(p) => p.theme.breakpoints.dskt}) {
    .top-bar {
      font-size: 1rem;
    }
    .title-bar {
      padding: 0;
      .mobile-menu-toggle {
        display: inline-block;
        min-width: 5rem;
        border-left: 0.1rem solid ${props => props.theme.colors.primary};
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .hamburger-toggle {
          position: relative;
          width: 2rem;
          height: 2rem;
          top: 0;
          &.active {
            span:first-of-type,
            span:last-of-type {
             opacity: 0;
            }
            span:nth-of-type(2) {
              transform: rotate(45deg)
            }
            span:nth-of-type(3) {
              transform: rotate(-45deg)
            }
          }
          span {
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 0.1rem;
            background: ${props => props.theme.colors.primary};
            transition: 0.15s ease-in-out all;
          }
          span:first-of-type {
            top: 20%
          }
          span:nth-of-type(2), 
          span:nth-of-type(3) {
            top: 50%;
          }
          span:nth-of-type(4) {
            top: 80%;
          }
        }
      }
    }
    .title {
      font-size: 3rem;
    }
    .jp-text {
      display: none;
    }
    .divider {
      font-size: 2rem;
    }
  }
`;

export default Header;
