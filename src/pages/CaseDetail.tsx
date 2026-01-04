import { useParams, Navigate } from 'react-router-dom';
import { cases } from './CaseDetailData';
import CaseDetailHero from '@/components/CaseDetailHero';
import CaseDetailStory from '@/components/CaseDetailStory';
import CaseDetailGallery from '@/components/CaseDetailGallery';

const CaseDetail = () => {
  const { id } = useParams();
  const caseData = cases.find(c => c.id === id);

  if (!caseData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <CaseDetailHero caseData={caseData} />
      <CaseDetailStory caseData={caseData} />
      <CaseDetailGallery caseData={caseData} />
    </div>
  );
};

export default CaseDetail;
