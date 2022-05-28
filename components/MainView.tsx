import styled from 'styled-components';
import { Box, Flex, Link } from 'rebass';
import works from './../data/works';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MainView = (props : any) => {

  // type panel = {
  //   panel: 'work-list' | 'work-content' | 'posts' | 'about',
  //   setPanel: any
  // };

  type IPanel = 'work-list' | 'work-content' | 'posts' | 'about';

  const [panel, setPanel] = useState<IPanel>('work-list');
  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <StyledMainView className="main-view">
      <Flex className="main-view-navigation" flexDirection={"column"}>
        <Box className={`main-navigation-button ${panel == 'about' ? 'selected' : null}`} onClick={() => {setPanel('about')}}>
          <span>About Us</span>
        </Box>
        <Box className={`main-navigation-button ${panel == 'work-list' ? 'selected' : null}`} onClick={() => {setPanel('work-list')}}>
          <span>Work</span>
        </Box>
        <Box className={`main-navigation-button ${panel == 'posts' ? 'selected' : null}`} onClick={() => {setPanel('posts')}}>
          <span>Posts</span>
        </Box>
      </Flex>
      <Flex width="100%" className="main-view-content" height={"100%"}>
        {panel == 'work-list' && (
          <Flex as={'ul'} className="work-list" flexDirection={'column'} width={'100%'}>
            {works.map((work, index) => (
              <Flex as={'li'} key={index} sx={{height: ['2rem'], px: ['1rem']}} alignItems={'center'} onClick={() => {
                setSelectedWork(index);
                setPanel('work-content')
              }}>
                <strong>{work.name}</strong>
                <span className="divider"> - </span>
                <span>
                  {work.workType.map((type, index) => (
                    <>
                      <span>{type}</span>
                      {index != work.workType.length - 1 && ', '}
                    </>
                  ))}
                </span>
              </Flex>
            ))}
          </Flex>
        )}
        {panel == 'work-content' && (
          <Flex flexDirection={'column'} className="work-content">
            <Flex className="content-header" height={"3rem"} alignItems="center" px={"1rem"}>
              <Box onClick={() => {setPanel('work-list')}}>← Back</Box>
              <Box className="url-bar" mx={'auto'}>
                <Link href={works[selectedWork].url}>
                  {works[selectedWork].url}
                </Link>
              </Box>
            </Flex>
            <Flex className="content-body" flexDirection={"column"} p="1rem 8rem">
              <ReactMarkdown>
                {works[selectedWork].content}
              </ReactMarkdown>
            </Flex>
          </Flex>
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

const StyledMainView = styled(Flex)`
  grid-area: main-view;
  border-bottom: calc(1rem / 16) solid ${props => props.theme.color.primary};
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
      &:hover,
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
    /* overflow-y: auto; */
    .work-list {
      /* overflow-y: auto; */
      li {
        border-bottom: calc((1rem / 16)) solid ${props => props.theme.color.primary};
        font-weight: 200;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.color.font};
          background: ${props => props.theme.color.primary};
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
      }
      .content-body {
        overflow-y: auto;
        h1, h2, h3, h4, h5, h6 {
          margin-bottom: 1rem;
        }
        img {
          width: 100%;
          margin-bottom: 1rem;
          border: 1px solid ${props => props.theme.color.primary};
        }
        p {
          margin-bottom: 1rem;
          line-height: 1.75rem;
        }
      }
    }
  }
`;

export default MainView;