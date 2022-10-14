import { transparentize } from 'polished';
import { forwardRef } from 'react';
import styled from 'styled-components';

const CustomButton = forwardRef((props: any, ref) => <StyledCustomButton ref={ref} {...props} />);
CustomButton.displayName = 'Custom Button';

const StyledCustomButton = styled.button`
  background: ${(props) => props.theme.colors.background};
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  border-radius: 0;
  font-family: unset;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.5rem;
  outline: none;
  height: 4rem;
  &:hover {
    background: ${(props) => transparentize(0.8, props.theme.colors.primary)};
  }
  &:active {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
  }
`;

export default CustomButton;
