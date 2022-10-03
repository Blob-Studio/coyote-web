import { transparentize } from 'polished';

interface Theme {
  colors: {
    background: string;
    primary: string;
    font: string;
    fontInverted: string;
    buttonBackgroundDefault: string;
    lightBackground: string;
  };
  sizes: {
    headerHeight: string;
    mobileHeaderHeight: string;
  };
  border: {
    width: string;
  };
  breakpoints: {
    dskt: string;
    mob: string;
  };
  textures: {
    polka: string;
    striped: string;
  };
}

const getTimeOfDay = () => {
  let currentTime = new Date().getHours();

  return currentTime < 6 || currentTime > 22 ? 'night' : 'day';
};

const colors = {
  background: `rgb(0, 2, 8)`,
  primary: getTimeOfDay() == 'day' ? 
    `hsla(160, 100%, 50%, 1)` : 
    `slateblue`,
  font: `rgb(0, 2, 8)`,
  white: 'lightgray',
  fontInverted: `rgb(230, 218, 218)`,
  buttonBackgroundDefault: `hsla(180, 9%, 32%, 1)`,
  lightBackground: `hsla(0, 0%, 95%, 1)`,
};

const sizes = {
  headerHeight: '10rem',
  mobileHeaderHeight: '6rem'
};

const theme: Theme = {
  colors: { ...colors },
  sizes: { ...sizes },
  border: {
    width: 'calc(1rem / 16)',
  },
  breakpoints: {
    dskt: 'max-width: 1200px',
    mob: 'max-width: 600px',
  },
  textures: {
    polka: `
      background-image:  
        radial-gradient(${colors.primary} 0.4px, transparent 0.4px), 
        radial-gradient(${colors.primary} 0.4px, rgba(229,229,247,0) 0.4px);
      background-size: 16px 16px;
      background-position: 0 0,8px 8px;
    `,
    striped: `
      background-image: repeating-linear-gradient(
        45deg, 
        ${transparentize(0.4, colors.primary)} 0, 
        ${transparentize(0.4, colors.primary)} 1px, 
        transparent 0, 
        transparent 50%
      ); 
    `,
  },
};

export default theme;
