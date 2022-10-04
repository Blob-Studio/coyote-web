import { Box, Text} from 'rebass';
import Link from 'next/link';
import styled from 'styled-components';

const NavButton = ({ children, url, currentPath, onClick, ...props }: { children: any; url: string; currentPath: string, onClick?: any }) => {
  return (
    <Link href={url}>
      <StyledNavButton 
        className={`main-navigation-button ${currentPath === url && 'selected'}`}
        onClick={onClick}
      >
          <Text 
            {...props}
            as="span" 
            className="main-navigation-button-text"
          >
              {children}
          </Text>
      </StyledNavButton>
    </Link>
  );
};

const StyledNavButton = styled.a`
  width: 60%;
  margin-bottom: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  font-weight: 600;
  .main-navigation-button-text {
    font-size: 4rem;
  }
  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
  }
  &:active {
    background:  ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export default NavButton;