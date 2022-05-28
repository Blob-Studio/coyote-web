import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import Marquee from 'react-fast-marquee';

const DecorationMarquee = (props : any) => {
  const marqueeProps = {
    className: 'marquee-block',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const decorationImages = [
    'decoration_1.svg',
    'decoration_2.svg',
    'decoration_3.svg',
    'decoration_4.svg',
    'decoration_5.svg',
    'decoration_6.svg',
    'decoration_7.svg',
    'decoration_1.svg',
    'decoration_2.svg',
    'decoration_3.svg',
    'decoration_4.svg',
    'decoration_5.svg',
    'decoration_6.svg',
    'decoration_7.svg',
  ];
  
  return (
    <StyledDecorationMarquee className="decoration-marquee">
      <Marquee gradient={false}>
        {decorationImages.map((imageURL, index) => (
          <Flex {...marqueeProps} key={index}>
            <img src={`/img/decorations/${imageURL}`} />
          </Flex>
        ))}
      </Marquee>
    </StyledDecorationMarquee>
  )
}

const StyledDecorationMarquee = styled(Flex)`
  grid-area: decoration-marquee;
  .marquee-block {
    width: 6rem;
    height: 6rem;
    border-right: calc(1rem / 16) solid ${props => props.theme.color.primary};
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export default DecorationMarquee;