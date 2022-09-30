import IWork from '../../utils/workSchema';
import WorkItem from '../../components/WorkItem';

const carrotWorkInfo: IWork = {
  name: "Carrot",
  workType: ["Development"],
  url: "https://carrot.org",
  workSafeURL: "carrot"
}

const Carrot = () => {
  return (
    <WorkItem url={carrotWorkInfo.url}>
      <h2>{carrotWorkInfo.name}</h2>
      <img src={'/img/works/carrot.png'} alt="Carrot"/>
    </WorkItem>
  );
}

export { carrotWorkInfo };
export default Carrot;