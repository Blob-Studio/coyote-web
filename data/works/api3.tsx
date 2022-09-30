import IWork from '../../utils/workSchema';
import HeaderImage from './../../public/img/works/api3.png';


const api3Info: IWork = {
  name: "API3",
  workType: ["Development"],
  url: "https://api3.org",
  workSafeURL: "api3",
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

export { api3Info }