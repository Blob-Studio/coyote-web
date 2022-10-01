import styled from 'styled-components';

const Custom404Page = () => {
  return (
    <Styled404Page>
      404: Could not find what you were looking for.
    </Styled404Page>
  );
};

const Styled404Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Custom404Page;