import Button from './Button';
import styled from 'styled-components';
import CopyText from './CopyToClipboard';

const StyledButton = styled(Button)`
  width: 70%;
  margin: 0 15% 3rem;

  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    display: none;
  }
`;

const ContactButton = () => {
  return (
    <CopyText textToCopy='ouremail@gmail.com'>
      <StyledButton>
        REACH OUT!
      </StyledButton>
    </CopyText>
  );
};

export default ContactButton;
