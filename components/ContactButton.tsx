import Button from './Button';
import styled from 'styled-components';
import CopyText from './CopyToClipboard';

const ContactButton = (props: any) => {
  return (
    <CopyText textToCopy='ouremail@gmail.com'>
      <StyledButton className={'contact-button'}>
        REACH OUT!
      </StyledButton>
    </CopyText>
  );
};

const StyledButton = styled(Button)``;

export default ContactButton;
