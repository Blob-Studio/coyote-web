import { ReactElement } from "react";

interface locale {
  mainNavigation: {
    about: string,
    work: string,
    services: string,
  },
  about: {
    content: ReactElement,
  },
  sidebar: {
    flags: {
      US: {
        alt: string,
        title: string,
      },
      AR: {
        alt: string,
        title: string,
      }
    },
    headerText: ReactElement,
  },
};

export default locale;
