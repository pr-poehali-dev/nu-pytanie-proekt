import Icon from '@/components/ui/icon';
import { CaseData } from '@/pages/CaseDetailData';

interface CaseDetailStoryProps {
  caseData: CaseData;
}

const CaseDetailStory = ({ caseData }: CaseDetailStoryProps) => {
  return (
    <div className="bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
        <div className="mb-16">
          <div className="inline-block px-5 py-2 border border-gold/30 rounded-full mb-6">
            <p className="text-xs tracking-[0.3em] text-champagne uppercase">Задача</p>
          </div>
          <p className="text-lg md:text-xl text-champagne/80 leading-relaxed">
            {caseData.brief}
          </p>
        </div>

        <div className="space-y-16">
          {caseData.story.map((section, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-gold/30"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gold rounded-full"></div>
              <h3 className="text-2xl font-light text-gold mb-4">{section.title}</h3>
              <p className="text-champagne/80 leading-relaxed text-lg">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-20 pt-20 border-t border-gold/20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Icon name="AlertTriangle" size={28} className="text-gold" />
              <h3 className="text-2xl font-light text-champagne">Вызовы</h3>
            </div>
            <ul className="space-y-4">
              {caseData.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-champagne/80">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Icon name="CheckCircle" size={28} className="text-gold" />
              <h3 className="text-2xl font-light text-champagne">Результаты</h3>
            </div>
            <ul className="space-y-4">
              {caseData.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-gold flex-shrink-0 mt-1" />
                  <span className="text-champagne/80">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 bg-muted/30 border border-gold/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Quote" size={32} className="text-gold" />
            <h3 className="text-2xl font-light text-champagne">Отзыв клиента</h3>
          </div>
          <p className="text-lg md:text-xl text-champagne/90 italic leading-relaxed mb-6">
            "{caseData.testimonial.text}"
          </p>
          <p className="text-gold font-medium">— {caseData.testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailStory;
