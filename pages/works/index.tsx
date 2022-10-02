import styled from 'styled-components';
import { Flex, Text, Box } from 'rebass';
import { Fragment, useRef } from 'react';
import { transparentize } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import MainViewContent from '../../components/MainViewContent';
import WorkList from './../../data/works/worklist';

const Works = (props: any) => {
  const [hoveredWork, setHoveredWork] = useState<any>(null);
  const [thumbnailYPosition, setThumbnailYPosition] = useState<number>(0);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  const thumbnailRef: any = useRef(null);
  const workListRef: any = useRef(null);

  useEffect(() => {
    thumbnailRef.current.style.top = thumbnailYPosition;
  }, [thumbnailYPosition]);

  useEffect(() => {
    if (workListRef.current) {
      setOffsetTop(workListRef.current.getBoundingClientRect().top);
    }
  }, [workListRef]);

  return (
    <StyledWorkList className="work-content">
      <Box ref={thumbnailRef} className={`thumbnail ${hoveredWork && 'visible'}`}>
        {hoveredWork && <Image src={hoveredWork.headerImage} layout="fill" alt="Thumbnail" />}
      </Box>
      <Flex as={'ul'} className="work-list" ref={workListRef}>
        {Object.keys(WorkList).map((key: string, i: number) => (
          <WorkListItem
            key={i}
            workData={WorkList[key]}
            hoveredWork={hoveredWork}
            setHoveredWork={setHoveredWork}
            setThumbnailYPosition={setThumbnailYPosition}
            offsetTop={offsetTop}
          />
        ))}
      </Flex>
    </StyledWorkList>
  );
};

const WorkListItem = ({ workData, setHoveredWork, setThumbnailYPosition, offsetTop }: any) => {
  const listItemRef: any = useRef(null);

  return (
    <StyledWorkListItem
      ref={listItemRef}
      onMouseEnter={() => {
        setHoveredWork(workData);
        let yPosition = listItemRef.current.getBoundingClientRect().bottom - 2 - offsetTop + 'px';
        setThumbnailYPosition(yPosition);
      }}
      onMouseLeave={() => {
        // setHoveredWork(null);
      }}
    >
      <Link href={`works/${workData.workSafeURL}`}>
        <Flex className="list-item">
          <Box className="list-item-text">
            <Text as="strong">{workData.name}</Text>
            <Text as="span">
              <span className="divider">/</span>
              {workData.workType.map((type: any, j: number) => (
                <Fragment key={j}>
                  <span>{type}</span>
                  {j != workData.workType.length - 1 && ', '}
                </Fragment>
              ))}
            </Text>
          </Box>
        </Flex>
      </Link>
    </StyledWorkListItem>
  );
};

const StyledWorkListItem = styled.li`
  border-bottom: calc((1rem / 16)) solid ${(props) => props.theme.colors.primary};
  font-weight: 200;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1.4rem;
  display: flex;
  cursor: pointer;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: visible;
  .list-item-text {
    display: flex;
    line-height: 1.9rem;
  }
  &:last-of-type {
    border-bottom: 0;
  }
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
    .divider,
    span {
      color: ${(props) => transparentize(0.4, props.theme.colors.font)};
    }
  }
  .divider,
  span {
    color: white;
  }
  .divider {
    margin: 0 0.5rem;
  }
  span {
    font-size: 1rem;
  }
`;

const StyledWorkList = styled(Flex)`
  ${(props) => props.theme.textures.polka};
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  .thumbnail {
    position: absolute;
    right: 0;
    top: 0;
    width: 22rem;
    height: 12rem;
    z-index: 1000000;
    pointer-events: none;
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
    opacity: 0;
    transition: 0.25s ease-in-out all;
    &.visible {
      opacity: 1;
    }
  }
  .work-list {
    flex-direction: column;
    width: 100%;
  }
`;

export default Works;
