import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/carrot.png';

const carrotWorkInfo: IWork = {
  name: 'Carrot',
  workType: ['Development'],
  url: 'https://carrot.org',
  workSafeURL: 'carrot',
  headerImage: HeaderImage,
  content: (
    <>
      <div className="breakdown">
        <div className="content-block">
          <h3>The Client</h3>
          <p>
            Carrot is a Web3 based service that grants permissionless access to create community-driven programmable incentives,
            distributing rewards when set criteria are met.
          </p>
        </div>
        <div className="content-block">
          <h3>How it all started</h3>
          <p>
            We were approached by Entrecasa Studio with this project devised by DXdao, one of our former clients. Delivered an amazing
            design, and we were very excited to bring it to life.
          </p>
        </div>
      </div>
    </>
  ),
};

export { carrotWorkInfo };
