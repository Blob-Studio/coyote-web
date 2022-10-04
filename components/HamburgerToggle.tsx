import styled from 'styled-components';

const HamburgerToggle = (props: any) => {
  return (
    <StyledHamburgerToggle className={`hamburger-toggle ${props.isActive ? 'active' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerToggle>
  );
};

const StyledHamburgerToggle = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  top: 0;
  &.active {
    span:first-of-type,
    span:last-of-type {
      opacity: 0;
    }
    span:nth-of-type(2) {
      transform: rotate(45deg);
    }
    span:nth-of-type(3) {
      transform: rotate(-45deg);
    }
  }
  span {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background: ${(props) => props.theme.colors.primary};
    transition: 0.15s ease-in-out all;
  }
  span:first-of-type {
    top: 20%;
  }
  span:nth-of-type(2),
  span:nth-of-type(3) {
    top: 50%;
  }
  span:nth-of-type(4) {
    top: 80%;
  }
`;

export default HamburgerToggle;
