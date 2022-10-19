import styled from 'styled-components';
import { Flex, Text, Box } from 'rebass';
import { Fragment, RefObject, useRef } from 'react';
import { transparentize } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

import WorkList from './../../data/works/worklist';
import IWork from '../../utils/workSchema';
import Head from 'next/head';

const Works = (props: any) => {
  const [hoveredWork, setHoveredWork] = useState<any>(null);
  const [thumbnailYPosition, setThumbnailYPosition] = useState<number>(0);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  const thumbnailRef: any = useRef(null);
  const workListRef: any = useRef(null);

  const updateWorkListTopOffset = () => {
    if (workListRef.current) {
      setOffsetTop(workListRef.current.getBoundingClientRect().top);
    }
  };

  useEffect(() => {
    thumbnailRef.current.style.top = thumbnailYPosition;
  }, [thumbnailYPosition]);

  useEffect(() => {
    updateWorkListTopOffset();
  }, [workListRef]);

  return (
    <StyledWorkList onScroll={throttle(updateWorkListTopOffset, 50)} className="work-content">
      <Head>
        <title>
          CWS - Works
        </title>
      </Head>
      <Box aria-hidden ref={thumbnailRef} className={`thumbnail ${hoveredWork && 'visible'}`}>
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
            thumbnailRef={thumbnailRef}
          />
        ))}
      </Flex>
    </StyledWorkList>
  );
};

const calculateThumbYPos = (thumbnailRef: RefObject<HTMLElement>, listItemRef: RefObject<HTMLElement>, offsetTop: number) => {
  const thumbnailHeight = thumbnailRef.current ? thumbnailRef.current.clientHeight : 0;
  let yPos = '0';
  if (!listItemRef.current) {
    return 0;
  }
  if (listItemRef.current.getBoundingClientRect().bottom + thumbnailHeight >= window.innerHeight) {
    yPos = `${listItemRef.current.getBoundingClientRect().y - thumbnailHeight - 2 - offsetTop}px`;
  } else {
    yPos = `${listItemRef.current.getBoundingClientRect().bottom - 1 - offsetTop}px`;
  }

  return yPos;
};

const WorkListItem = ({
  workData, setHoveredWork, setThumbnailYPosition, offsetTop, thumbnailRef
}: {
  workData: IWork,
  [key: string]: any
} ) => {
  const listItemRef: any = useRef(null);

  return (
    <Link href={`works/${workData.workSafeURL}`}>
      <StyledWorkListItem
        aria-label={workData.name}
        ref={listItemRef}
        onMouseEnter={() => {
          setHoveredWork(workData);
          const yPos = calculateThumbYPos(thumbnailRef, listItemRef, offsetTop);
          setThumbnailYPosition(yPos);
        }}
      >
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
      </StyledWorkListItem>
    </Link>
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
    background: ${(props) => transparentize(0.8, props.theme.colors.primary)};
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
  @media screen and (${(p) => p.theme.breakpoints.dskt}) {
    height: unset;
    padding: 0.8rem 0.8rem;
    .list-item {
      .list-item-text {
        flex-direction: column;
        .divider {
          display: none;
        }
      }
    }
  }
`;

const StyledWorkList = styled(Flex)`
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  &:hover {
    .thumbnail {
      &.visible {
        opacity: 1;
      }
    }
  }
  .thumbnail {
    position: absolute;
    background: ${(props) => props.theme.colors.primary};
    right: 1rem;
    top: 0;
    width: 22rem;
    height: 12.05rem;
    z-index: 100;
    pointer-events: none;
    border: 1px solid ${(props) => props.theme.colors.primary};
    opacity: 0;
    transition: 0.15s ease-in-out all;
  }
  .work-list {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    .thumbnail {
      display: none;
    }
  }
`;

export default Works;
