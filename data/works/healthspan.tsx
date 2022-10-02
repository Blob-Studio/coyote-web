import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/healthspan.png';

const healthspanInfo: IWork = {
  name: 'Healthspan',
  workType: ['Development'],
  url: 'https://gethealthspan.com/metformin-ppc/',
  workSafeURL: 'healthspan',
  headerImage: HeaderImage,
  content: (
    <>
      <div className="breakdown">
        <h3>How it all started</h3>
        <p>
          We were approached by Metamensaje Studio with this project devised by DXdao, one of our former clients. Entrecasa delivered an
          amazing design, and we were very excited to bring it to life.
        </p>
      </div>
    </>
  ),
};

export { healthspanInfo };
