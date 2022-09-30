import IWork from '../../utils/workSchema';
import WorkItem from '../../components/WorkItem';
import HeaderImage from './../../public/img/works/carrot.png';
import { useRouter } from 'next/router';
import WorkList from './../../data/works/worklist';

const Work = () => {
  const router = useRouter();
  const { work } = router.query;
  // console.log(work);
  const selectedWork = WorkList[work];
  return (
    <WorkItem 
      url={selectedWork.url}
      title={selectedWork.name}
      topImage={HeaderImage}
    >
      <div className="breakdown">
        {selectedWork.content}
      </div>
    </WorkItem>
  );
}
export default Work;