import Button from './Button';
import styled from 'styled-components';
import CopyText from './CopyToClipboard';
import { forwardRef, useEffect, useRef } from 'react';

const StyledButton = styled(Button)`
  width: 70%;
  margin: 0 15% 3rem;

  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    display: none;
  }
`;

const ForwardRefButton = forwardRef((props: any, ref) => <StyledButton ref={ref} {...props}>{props.children}</StyledButton>);
ForwardRefButton.displayName="Forward Ref Button";

const ContactButton = () => {
  return (
    <CopyText textToCopy='ouremail@gmail.com'>
      <ForwardRefButton>
        REACH OUT!
      </ForwardRefButton>
    </CopyText>
  );
};

export default ContactButton;
