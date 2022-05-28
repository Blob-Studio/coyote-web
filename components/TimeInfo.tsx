import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { useState, useEffect } from 'react';

const TimeInfo = (props : any) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds().toString();
      if (seconds.length < 2 ) {
        seconds = '0' + seconds;
        setTime(`${hour}:${minutes}:${seconds}`);
      } else {
        setTime(`${hour}:${minutes}:${seconds}`);
      }
    }, 1000)
  }, []);

  return (
      <StyledTimeInfo className="time-info">
        <Flex className="time-selector" flexDirection={'column'}>
          <Box height={"25%"} className="country-selector selected">Argentina</Box>
          <Box height={"25%"} className="country-selector">USA</Box>
          <Box height={"25%"} className="country-selector">Barcelona</Box>
          <Box height={"25%"} className="country-selector">Japan</Box>
        </Flex>
        <Flex className="time" width="100%" justifyContent={'center'} alignItems="center">
          <Box>{time}</Box>
        </Flex>
      </StyledTimeInfo>
  )
}

const StyledTimeInfo = styled(Flex)`
  grid-area: bottom-info;
  border-right: calc(1rem / 16) solid ${props => props.theme.color.primary};
  .time-selector {
    width: 10rem;
    border-right: calc(1rem / 16) solid ${props => props.theme.color.primary};
    .country-selector {
      border-bottom: calc(1rem / 16) solid ${props => props.theme.color.primary};
      padding: 0 1rem;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      &.selected {
        background: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.font};
      }
      &:hover {
        background: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.font};
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .time {
    font-size: 3rem;
    font-weight: 600;
  }
`;

export default TimeInfo;