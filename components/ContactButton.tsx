import Button from './Button';
import styled from 'styled-components';

const ContactButton = (props : any) => {
  return (
    <StyledButton className={'contact-button'}>
      REACH OUT!
    </StyledButton>
  )
}

const StyledButton = styled(Button)``

export default ContactButton;