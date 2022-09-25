import styled from "styled-components";
import { Button } from "rebass";

const CustomButton = (props: any) => {
  return <StyledCustomButton {...props} />;
};

const StyledCustomButton = styled(Button)`
  background: ${(props) => props.theme.color.primary};
  cursor: pointer;
  color: ${(props) => props.theme.color.font};
  text-align: center;
  border-radius: 0;
  font-family: unset;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export default CustomButton;
