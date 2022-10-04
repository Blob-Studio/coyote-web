import styled from 'styled-components';
import { Flex, Box, Link } from 'rebass';
import { transparentize } from 'polished';
import IWork from '../utils/workSchema';
import NextLink from 'next/link';
import MainViewContent from './MainViewContent';
import Image from 'next/image';

type WorkPageProps = {
  url: string;
  children: any;
  title: any;
  topImage: any;
};

const WorkPage = ({ url, children, title, topImage }: WorkPageProps) => {
  return (
    <StyledWorkPage className="work-content">
      <Flex className="content-header">
        <NextLink href="/works">
          <Box className="back-button">← Back</Box>
        </NextLink>
        <Box className="url-bar" mx={'auto'}>
          <Link target="_blank" href={url}>
            {url}
          </Link>
        </Box>
      </Flex>
      <div className="page-wrapper">
        <MainViewContent className="content-body">
          <h1>{title}</h1>
          <div className="top-image">
            <Image src={topImage} alt={title} className="top-image" />
          </div>
          {children}
        </MainViewContent>
      </div>
    </StyledWorkPage>
  );
};

const StyledWorkPage = styled(Flex)`
  flex-direction: column;
  width: 100%;
  overflow: auto;
  .page-wrapper {
    width: 70%;
    margin: 0 auto;
    flex-grow: 1;
  }
  .content-header {
    min-height: 3rem;
    align-items: center;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.primary};
    position: relative;
    .back-button {
      cursor: pointer;
      position: absolute;
      left: 1rem;
    }
    .url-bar {
      background: ${(props) => transparentize(0.8, props.theme.colors.primary)};
      width: calc(65%);
      text-align: center;
      height: 70%;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .content-body {
    padding-bottom: 4rem;
    h1 {
      font-size: 3rem;
      margin-bottom: 1.2rem;
    }
    h2 {
      font-size: 2.4rem;
      margin-bottom: 1.2rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }
    p {
      color: white;
      font-size: 1.2rem;
      line-height: 180%;
      font-weight: 200;
    }
    .top-image {
      border: 1px solid ${(props) => props.theme.colors.primary};
      margin-bottom: 2rem;
    }
  }
  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    .content-header {
      display: flex;
      .url-bar {
        background: none;
        margin-left: auto;
        width: unset;
        margin-right: 8%;
      }
    }
  }
`;

export default WorkPage;
