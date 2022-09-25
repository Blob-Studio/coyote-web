interface Theme {
  color: {
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

const theme: Theme = {
  color: {
    background: `rgb(0, 2, 8)`,
    // primary: `hsla(54, 100%, 55%, 1)`,
    primary: `rgb(230, 218, 218)`,
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
