import styled, {keyframes} from 'styled-components';
import { Box, Flex, Link } from 'rebass';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import About from './../components/About';
import WorkList from './WorkList';
import OurVision from './OurVision';
import WorkContent from './WorkContent';
import { useRouter } from 'next/router';
import getLocales from '../utils/getLocales';
import { transparentize } from 'polished';
import posts from './../data/posts';

const MainView = (props : any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');
  console.log(posts);
  return (
    <StyledMainView className={`main-view ${props.panel}`}>
      <Flex className="main-view-navigation" flexDirection={"column"}>
        {props.panel == 'unselected' && (
          <>
            <Box as="h2" sx={{textAlign: 'center', mb: '1rem'}}>¡WELCOME FRIEND!</Box>
          </>
        )}
        <Box className={`main-navigation-button ${props.panel == 'about' ? 'selected' : null}`} onClick={() => {props.setPanel('about')}}>
          <span>{locale.mainNavigation.about}</span>
        </Box>
        <Box className={`main-navigation-button ${props.panel == 'work-list' ? 'selected' : null}`} onClick={() => {props.setPanel('work-list')}}>
          <span>{locale.mainNavigation.work}</span>
        </Box>
        <Box className={`main-navigation-button ${props.panel == 'posts' ? 'selected' : null}`} onClick={() => {props.setPanel('posts')}}>
          <span>{locale.mainNavigation.posts}</span>
        </Box>
        <Box className={`main-navigation-button ${props.panel == 'services' ? 'selected' : null}`} onClick={() => {props.setPanel('services')}}>
          <span>{locale.mainNavigation.services}</span>
        </Box>
      </Flex>
      <Flex width="100%" className="main-view-content" height={"100%"}>
        {props.panel == 'work-list' && (
          <WorkList setPanel={props.setPanel} setSelectedWork={props.setSelectedWork}/>
        )}
        {props.panel == 'work-content' && (
          <WorkContent setPanel={props.setPanel} selectedWork={props.selectedWork}/>
        )}
        {props.panel == 'about' && (
          <About/>
        )}
        {props.panel == 'our-vision' && (
          <OurVision/>
        )}
        {props.panel == 'services' && (
          <Box flexDirection={'column'} alignItems={'center'} width={"100%"}>
            <Box width="40rem" py={"2rem"} mx={"auto"} sx={{textAlign: 'center'}}>
              <Box className="content-block" >
                <h1>We provide the following services</h1>
                <Flex flexDirection={"column"} >
                  <Flex as="ul" mx={"-0.5rem"}>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Website</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Website + CMS</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Shopify</Box>
                  </Flex>
                  <Flex as="ul" mx={"-0.5rem"}>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Wordpress</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>SEO Optimization</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}></Box>
                  </Flex>
                </Flex>
              </Box>
              <Box className="content-block">
                <h1>We love modern tools</h1>
                <Flex flexDirection={"column"}>
                  <Flex as="ul" mx={"-0.5rem"}>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>React</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Next.js</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Strapi</Box>
                  </Flex>
                  <Flex as="ul" mx={"-0.5rem"}>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>node.js</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Gatsby</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Express</Box>
                  </Flex>
                  <Flex as="ul" mx={"-0.5rem"}>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>mongodb</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>Google Cloud</Box>
                    <Box as={"li"} mx={"0.5rem"} className={"content-card"}>AWS</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
        )}
        {props.panel == 'unselected' && (
          <Box className="starfield">
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
          </Box>
        )}
        {props.panel == 'posts' && (
          <Box flexDirection={'column'} alignItems={'center'} width={"100%"}>
            <Flex as={"ul"} className="post-list" flexDirection={"column"}>
              {posts.map((post, index) => (
                <Flex as={"li"} flexDirection={"column"} className={"post-list-item"}>
                  <h2>{post.name}</h2>
                  <p>{post.shortDescription}</p>
                  <span className={"author"}>By {post.author}</span>
                </Flex>
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
      <Box className="main-view-side">
        <span>
          We create compelling web experiences
        </span>
      </Box>
    </StyledMainView>
  )
}

const zoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  } 
  85% {
    opacity: 1;
    transform: scale(2.8);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
    transform: scale(3.5);
  }
`;

const StyledMainView = styled(Flex)`
  grid-area: main-view;
  border-bottom: calc(1rem / 16) solid ${props => props.theme.color.primary};
  &.unselected {
    position: relative;
    .main-view-navigation {
      position: absolute;
      width: 40rem;
      margin: 0 calc(50% - 20rem);
      padding: 2rem 0;
      top: 0;
      height: 0;
      height: 100%;
      z-index: 10;
      .main-navigation-button {
        border: 0;
        border: 1px solid ${props => props.theme.color.primary} !important;
        /* border-bottom: 0 !important; */
        background:  ${props => props.theme.color.background};
        margin-bottom: 2rem;
        &:last-child {
          /* border-bottom: 1px solid ${props => props.theme.color.primary} !important; */
        }
        span {
          font-size: 4rem;
          transform: rotate(0deg);
          width: 100%;
        }
      }
    }
  }
  .main-view-side {
    writing-mode: vertical-rl;
    width: 2rem;
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.font};
    display: flex;
    flex-direction: center;
    justify-content: center;
    line-height: 1.5rem;
  }
  .starfield {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .stars {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(1px 1px at 20px 30px, ${props => props.theme.color.primary}, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 40px 70px, ${props => props.theme.color.primary}, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 50px 160px, ${props => props.theme.color.primary}, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 90px 40px, ${props => props.theme.color.primary}, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 130px 80px, ${props => props.theme.color.primary}, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 160px 120px, ${props => props.theme.color.primary}, rgba(0,0,0,0));
      background-repeat: repeat;
      background-size: 200px 200px;
      animation: ${zoom} 5s infinite;
      opacity: 0;
      &:nth-child(1) {
        background-position: 50% 50%;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        background-position: 20% 60%;
        animation-delay: 1s;
      }
      &:nth-child(3) {
        background-position: -20% -30%;
        animation-delay: 2s;
      }
      &:nth-child(4) {
        background-position: 40% -80%;
        animation-delay: 3s;
      }
      &:nth-child(5) {
        background-position: -20% 30%;
        animation-delay: 4s;
      }
    }
  }
  .main-view-navigation {
    width: 4rem;
    .main-navigation-button {
      height: calc(100% / 3);
      border-right: calc(1rem / 16) solid ${props => props.theme.color.primary};
      border-bottom: calc(1rem / 16) solid ${props => props.theme.color.primary};
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: ${props => transparentize(0.9, props.theme.color.primary)}
      }
      &.selected {
        background: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.font};
      }
      span {
        display: inline-block;
        width: 10rem;
        position: absolute;
        transform: rotate(-90deg);
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .main-view-content {
    flex-grow: 1;
    .post-list {
      .post-list-item {
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.color.primary};
        padding: 1rem;
        p {
          margin: 0;
        }
        h2 {
          margin-bottom: 0.5rem;
        }
        .author {
          font-size: 0.75rem;
          margin-top: 0.5rem;
          opacity: 0.7;
        }
      }
    }
    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 1rem;
    }
    .content-card {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid ${props => props.theme.color.primary};
      width: 75%;
      list-style: none;
      &:hover {
        background: ${props => transparentize(0.9, props.theme.color.primary)};
        /* color: black; */
        p {
          /* color: black; */
        }
      }
      h3, p {
        margin: 0 !important;
      }
    }
    img {
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid ${props => props.theme.color.primary};
    }
    p {
      color: white;
      margin-bottom: 1rem;
      line-height: 1.75rem;
    }
    .content-block {
      margin-bottom: 3rem;
    }
    .work-list {
      li {
        border-bottom: calc((1rem / 16)) solid ${props => props.theme.color.primary};
        font-weight: 200;
        cursor: pointer;
        &:hover {
          /* color: ${props => props.theme.color.font}; */
          background: ${props => transparentize(0.9, props.theme.color.primary)}
        }
        .divider {
          margin: 0 0.5rem;
        }
      }
    }
    .work-content {
      overflow-y: hidden;
      .content-header {
        border-bottom: calc((1rem / 16)) solid ${props => props.theme.color.primary};
        .back-button {
          cursor: pointer;
        }
      }
      .content-body {
        overflow-y: auto;
      }
    }
  }
`;

export default MainView;