import { useRouter } from 'next/router';

import WorkPage from '../../components/WorkPage';
import WorkList from './../../data/works/worklist';

const Work = () => {
  const router = useRouter();
  const { work }: any = router.query;

  if (typeof window !== 'undefined' && !Object.keys(WorkList).find((k) => k === work)) {
    router.push('/404');
    return null;
  }

  const selectedWork = WorkList[work];
  if (!selectedWork) {
    return null;
  }
  return (
    <WorkPage url={selectedWork.url} title={selectedWork.name} topImage={selectedWork.headerImage}>
      <div className="breakdown">{selectedWork.content}</div>
    </WorkPage>
  );
};

export default Work;
