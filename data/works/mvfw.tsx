import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/mvfw.png';

const mvfwWorkInfo: IWork = {
  name: "Decentraland Metaverse Fashion Week",
  workType: ["Development", "Web Design"],
  url: "https://mvwf.org",
  workSafeURL: "mvfw",
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

export { mvfwWorkInfo }