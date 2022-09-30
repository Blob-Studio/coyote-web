import IWork from '../../utils/workSchema';
import WorkItem from '../../components/WorkItem';

const swaprWorkInfo: IWork = {
  name: "Swapr",
  workType: ["Development"],
  url: "https://swapr.eth",
  workSafeURL: "swapr"
}

const Carrot = () => {
  return (
    <WorkItem url={swaprWorkInfo.url}>
      <h2>{swaprWorkInfo.name}</h2>
      <img src={'/img/works/carrot.png'} alt="Carrot"/>
    </WorkItem>
  );
}

export { swaprWorkInfo };
export default Carrot;