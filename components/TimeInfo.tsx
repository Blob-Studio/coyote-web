import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { useState, useEffect, useRef } from 'react';
import { transparentize } from 'polished';

const TimeInfo = (props: any) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      let date = new Date();
      setTime(`${date.toLocaleString('en', {
        timeStyle: 'medium',
        hourCycle: 'h23',
        timeZone: 'America/Argentina/Buenos_Aires'
      })}`);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <StyledTimeInfo className="time-info">
      <Box className="country">ARG Time</Box>
      <Flex className="time">{time}</Flex>
    </StyledTimeInfo>
  );
};

const StyledTimeInfo = styled(Flex)`
  border-top: 0.1rem solid ${(props) => props.theme.colors.primary};
  .country {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
    font-size: 1rem;
    font-weight: 600;
  }
  .time {
    font-weight: 600;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-size: 1.5rem;
  }
`;

export default TimeInfo;
