import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { useState, useEffect, useRef } from 'react';
import { transparentize } from 'polished';

const TimeInfo = (props : any) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes().toString();
      if (minutes.length < 2 ) {
        minutes = '0' + minutes;
      }
      let seconds = date.getSeconds().toString();
      if (seconds.length < 2 ) {
        seconds = '0' + seconds;
      }
      setTime(`${hour}:${minutes}:${seconds}`);
    }, 1000)
  }, []);

  return (
      <StyledTimeInfo className="time-info">
        <Flex className="time-selector" flexDirection={'column'}>
          <Box height={"100%"} className="country">Argentina</Box>
        </Flex>
        <Flex className="time" width="100%" justifyContent={'center'} alignItems="center">
          <Box>{time}</Box>
        </Flex>
      </StyledTimeInfo>
  )
}

const StyledTimeInfo = styled(Flex)`
  grid-area: bottom-info;
  height: 2rem;
  border-right: calc(1rem / 16) solid ${props => props.theme.color.primary};
  .time-selector {
    width: 8rem;
    border-right: calc(1rem / 16) solid ${props => props.theme.color.primary};
  }
  .country {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.font};
  }
  .time {
    font-size: 1.5rem;
    font-weight: 600;
    background: ${props => transparentize(0.95, props.theme.color.primary)};
  }
`;

export default TimeInfo;