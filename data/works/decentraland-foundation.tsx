import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/decentraland-foundation.png';

const decentralandFoundationWorkInfo: IWork = {
  name: "Decentraland Foundation",
  workType: ["Development", "Web Design"],
  url: "https://decentraland-foundation.org",
  workSafeURL: "decentraland-foundation",
  headerImage: HeaderImage,
  content:
  <>
    <div className="breakdown">
      <h3>How it all started</h3>
      <p>
        We were approached by Entrecasa Studio with this project devised by DXdao, one of our former clients. Entrecasa delivered an amazing design, and we were very excited to bring it to life.
      </p>
    </div>
  </>
};

export { decentralandFoundationWorkInfo }