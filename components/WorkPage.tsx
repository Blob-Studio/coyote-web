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
      <MainViewContent className="content-body">
        <h2>{title}</h2>
        <div className="top-image">
          <Image src={topImage} alt={title} className="top-image" />
        </div>
        {children}
      </MainViewContent>
    </StyledWorkPage>
  );
};

const StyledWorkPage = styled(Flex)`
  flex-direction: column;
  width: 100%;
  .content-header {
    height: 3rem;
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
      width: 80%;
      text-align: center;
      height: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .content-body {
    padding-bottom: 4rem;
    h2 {
      font-size: 2.4rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 2rem;
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
  @media screen and (${(p) => p.theme.breakpoints.mobile}) {
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
