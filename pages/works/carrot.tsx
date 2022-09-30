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
      {carrotWorkInfo.name}
    </WorkItem>
  );
}

export { carrotWorkInfo };
export default Carrot;