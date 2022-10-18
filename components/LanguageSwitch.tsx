import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

import getLocales from '../utils/getLocales';


const FlagButton = ({ imgSrc, alt, locale, title }: {imgSrc: string, alt: string, locale: "en" | "es", title: string }) => {
  const r = useRouter();
  return (
    <span onClick={() => {r.push(r.pathname, r.query, { locale })}}>
      <Image
        title={title}
        alt={alt}
        src={imgSrc}
        width="60px"
        height="40px"
      />
    </span>
  );
};

const LanguageSwitch = () => {
  const r = useRouter();
  const locale = getLocales(r.locale as 'en' | 'es');
  return (
    <StyledLanguageSwitch>
      <FlagButton title={locale.sidebar.flags.US.title} locale="en" alt={locale.sidebar.flags.US.alt} imgSrc="/img/flags/US.svg" />
      <FlagButton title={locale.sidebar.flags.AR.title} locale="es" alt={locale.sidebar.flags.AR.alt} imgSrc="/img/flags/AR.svg" />
    </StyledLanguageSwitch>
  )
}

const StyledLanguageSwitch = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  gap: 1rem;
  cursor: pointer;
  margin-block: 1rem;
`;

export default LanguageSwitch;
