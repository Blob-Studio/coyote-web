import Image from 'next/image';
import IWork from '../../utils/workSchema';
import WorkItem from '../../components/WorkItem';
import HeaderImage from './../../public/img/works/swapr.png';

const swaprWorkInfo: IWork = {
  name: "Swapr",
  workType: ["Development"],
  url: "https://swapr.eth",
  workSafeURL: "swapr"
}

const Carrot = () => {
  return (
    <WorkItem 
      url={swaprWorkInfo.url}
      title={swaprWorkInfo.name}
      topImage={HeaderImage}
    >
      <h3>How It All Started</h3>
    </WorkItem>
  );
}

export { swaprWorkInfo };
export default Carrot;