import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PhilosophySection = () => {
  const [currentPrinciple, setCurrentPrinciple] = useState(0);

  const principles = [
    {
      title: 'Никаких навязанных партнёров',
      description: 'Я подбираю подрядчиков под ваш запрос и бюджет, а не под свою выгоду',
      icon: 'ShieldCheck'
    },
    {
      title: 'Прозрачность на 100%',
      description: 'Все расходы, договоры и решения — с вашего ведома и одобрения',
      icon: 'Eye'
    },
    {
      title: 'Ваш бюджет = моя задача',
      description: 'Защищаю ваши деньги в переговорах и добиваюсь лучших условий',
      icon: 'BadgeDollarSign'
    },
    {
      title: 'База партнёров в подарок',
      description: 'После договора получаете доступ к моей кураторской базе проверенных специалистов',
      icon: 'Gift'
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-blue-600/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Философия</p>
          <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
            Моя <span className="text-gold">миссия</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 via-gold/30 to-blue-600/30 animate-spin-slow blur-2xl"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/files/IMG_5780.PNG"
                  alt="Марина Малиночка"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
                <Icon name="Play" size={20} className="text-gold" />
                <span className="text-champagne text-sm">Посмотреть видео-обращение</span>
              </div>
              <p className="text-champagne/50 text-xs mt-3">30 секунд о том, как я работаю</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-2 mb-8">
              {principles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPrinciple(index)}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    index === currentPrinciple
                      ? 'bg-gold'
                      : 'bg-gold/20 hover:bg-gold/40'
                  }`}
                />
              ))}
            </div>

            <div className="min-h-[300px]">
              <div className="neumorphic rounded-3xl p-10 transform transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name={principles[currentPrinciple].icon} size={32} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-light text-champagne mb-4">
                      {principles[currentPrinciple].title}
                    </h4>
                    <p className="text-xl text-champagne/80 leading-relaxed">
                      {principles[currentPrinciple].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => setCurrentPrinciple((currentPrinciple - 1 + principles.length) % principles.length)}
                className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/10 transition-all"
              >
                <Icon name="ChevronLeft" size={20} className="text-gold" />
              </button>
              <button
                onClick={() => setCurrentPrinciple((currentPrinciple + 1) % principles.length)}
                className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold/10 transition-all"
              >
                <Icon name="ChevronRight" size={20} className="text-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
