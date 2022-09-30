import IWork from '../../utils/workSchema';
import WorkItem from '../../components/WorkItem';
import { useRouter } from 'next/router';
import WorkList from './../../data/works/worklist';

const Work = () => {
  const router = useRouter();
  const { work } = router.query;
  const selectedWork = WorkList[work];
  return (
    <WorkItem 
      url={selectedWork.url}
      title={selectedWork.name}
      topImage={selectedWork.headerImage}
    >
      <div className="breakdown">
        {selectedWork.content}
      </div>
    </WorkItem>
  );
}
export default Work;