import styled from "styled-components";
import { Box, Flex } from "rebass";
import { useState, useEffect, useRef } from "react";
import { transparentize } from "polished";

const TimeInfo = (props: any) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let minutes = date.getMinutes().toString();
      if (minutes.length < 2) {
        minutes = "0" + minutes;
      }
      let seconds = date.getSeconds().toString();
      if (seconds.length < 2) {
        seconds = "0" + seconds;
      }
      setTime(`${hour}:${minutes}:${seconds}`);
    }, 1000);
  }, []);

  return (
    <StyledTimeInfo className="time-info">
      <Flex className="time-selector" flexDirection={"column"}>
        <Box height={"100%"} className="country">
          ARG Time
        </Box>
      </Flex>
      <Flex
        className="time"
        justifyContent={"center"}
        alignItems="center"
        flexGrow={1}
      >
        <Box sx={{fontSize: '1.8rem', fontWeight: 600 }}>
          {time}
        </Box>
      </Flex>
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
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export default TimeInfo;
