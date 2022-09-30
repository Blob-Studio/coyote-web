interface Theme {
  colors: {
    background: string;
    primary: string;
    font: string;
    fontInverted: string;
    buttonBackgroundDefault: string;
    lightBackground: string;
  };
  border: {
    width: string;
  };
  rebassBreakpoints: {
    main: number[];
  };
  breakpoints: {
    dskt: string;
    mob: string;
  };
}

const getTimeOfDay = () => {
  let currentTime = new Date().getHours();

  return currentTime < 4 || currentTime > 22 ?
    'night' :
    'day'
}

const theme: Theme = {
  colors: {
    background: `rgb(0, 2, 8)`,
    primary: getTimeOfDay() == 'day' ? 
      `hsla(160, 100%, 50%, 1)` : 
      `slateblue`,
    font: `rgb(0, 2, 8)`,
    fontInverted: `rgb(230, 218, 218)`,
    buttonBackgroundDefault: `hsla(180, 9%, 32%, 1)`,
    lightBackground: `hsla(0, 0%, 95%, 1)`,
  },
  border: {
    width: "calc(1rem / 16)"
  },
  rebassBreakpoints: {
    main: [1098],
  },
  breakpoints: {
    dskt: "max-width: 1200px",
    mob: "max-width: 600px",
  },
};

export default theme;
