import IWork from '../../utils/workSchema';
import WorkItem from '../../components/WorkItem';
import { useRouter } from 'next/router';
import WorkList from './../../data/works/worklist';
import _ from 'lodash';

const Work = () => {
  const router = useRouter();
  const { work }: any = router.query;

  const selectedWork = WorkList[work];
  return (
    Object.keys(WorkList).find(k => k === work) ?
    <WorkItem 
      url={selectedWork.url}
      title={selectedWork.name}
      topImage={selectedWork.headerImage}
    >
      <div className="breakdown">
        {selectedWork.content}
      </div>
    </WorkItem>
    :
    <>
      Could not find the work you requested
    </>
  );
}
export default Work;