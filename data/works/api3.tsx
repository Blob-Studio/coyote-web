import IWork from '../../utils/workSchema';
import Image from 'next/image';
import HeaderImage from './../../public/img/works/api3.png';
import MobileImage1 from './../../public/img/works/api3-mobile-1.png';

const api3Info: IWork = {
  name: 'API3',
  workType: ['Development'],
  url: 'https://api3.org',
  workSafeURL: 'api3',
  headerImage: HeaderImage,
  content: (
    <>
      <div className="content-block">
        <h3>How it all started</h3>
        <p>
          We were approached by Entrecasa Studio with this project devised by DXdao, one of our former clients. Entrecasa delivered an
          amazing design, and we were very excited to bring it to life.
        </p>
      </div>
      <div className="content-block">
        <h3>About the Development</h3>
        <div className="two-column-block">
          <div className="image-block">
            <Image src={'/img/works/api3-mobile.png'} width={360} height={720} alt={'API3'} />
          </div>
          <p>
            We were approached by Entrecasa Studio with this project devised by DXdao, one of our former clients. Entrecasa delivered an
            amazing design, and we were very excited to bring it to life.
          </p>
        </div>
      </div>
    </>
  ),
};

export { api3Info };
