import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/api3.png';

const bankathonInfo: IWork = {
  name: 'El Salvador Bitcoin Bankathon',
  workType: ['Development'],
  url: 'https://bitcoin-alliance.org/',
  workSafeURL: 'el-salvador-bitcoin-bankathon',
  headerImage: HeaderImage,
  content: (
    <>
      <div className="breakdown">
        <h3>How it all started</h3>
        <p>
          We were approached by Entrecasa Studio with this project devised by DXdao, one of our former clients. Entrecasa delivered an
          amazing design, and we were very excited to bring it to life.
        </p>
      </div>
    </>
  ),
};

export { bankathonInfo };
