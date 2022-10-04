import styled from 'styled-components';

const CustomButton = (props: any) => {
  return <StyledCustomButton {...props} />;
};

const StyledCustomButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  color: ${(props) => props.theme.colors.font};
  text-align: center;
  border-radius: 0;
  font-family: unset;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.5rem;
  outline: none;
  border: 0;
  height: 3rem;
`;

export default CustomButton;
