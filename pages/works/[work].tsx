import WorkItem from '../../components/WorkItem';
import { useRouter } from 'next/router';
import WorkList from './../../data/works/worklist';
import { useEffect } from 'react';

const Work = () => {
  const router = useRouter();
  const { work }: any = router.query;

  if (typeof window !== "undefined" && !Object.keys(WorkList).find(k => k === work)) {
    router.push("/404");
    return null;
  };

  const selectedWork = WorkList[work];
  if (!selectedWork) {
    return null;
  }
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