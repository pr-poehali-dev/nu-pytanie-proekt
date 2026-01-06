import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { CaseData } from '@/pages/CaseDetailData';

interface CaseDetailHeroProps {
  caseData: CaseData;
}

const CaseDetailHero = ({ caseData }: CaseDetailHeroProps) => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gold to-champagne rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg lg:text-xl">М</span>
            </div>
            <div>
              <h1 className="text-base lg:text-xl font-bold text-gold tracking-wide">Марина Малиночка</h1>
            </div>
          </Link>
          
          <Link to="/#cases">
            <button className="flex items-center gap-2 text-champagne hover:text-gold transition-colors">
              <Icon name="ArrowLeft" size={20} />
              <span className="hidden sm:inline">Назад к кейсам</span>
            </button>
          </Link>
        </div>
      </nav>

      <div className="relative h-[60vh] md:h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${caseData.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-6">
                <Icon name="Sparkles" size={16} className="text-gold" />
                <span className="text-sm text-gold font-medium">{caseData.location}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-champagne mb-6 leading-tight">
                {caseData.title}
              </h1>
              
              <p className="text-lg md:text-xl text-champagne/80 mb-8">
                {caseData.description}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-gold" />
                  <span className="text-champagne">{caseData.guests} гостей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} className="text-gold" />
                  <span className="text-champagne">{caseData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDetailHero;