import styled from 'styled-components';

const Custom404Page = () => {
  return (
    <Styled404Page>
      <span className="large-text outlined">404</span>
      <span>Could not find what you were looking for.</span>
    </Styled404Page>
  )
};

const Styled404Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .large-text {
    font-size: 20rem;
    font-weight: 600;
    -webkit-text-stroke-width: 0.25rem;
  }
`;

export default Custom404Page;
