import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PortfolioCase {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  budget: string;
  guests: number;
  image: string;
  category: string;
  year: string;
}

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases: PortfolioCase[] = [
    {
      id: 'wedding-luxury-moscow',
      title: 'Свадьба в загородной усадьбе',
      subtitle: 'Классическое торжество',
      location: 'Московская область, загородный комплекс',
      budget: '980 000 ₽',
      guests: 70,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c51fe9a0-63e0-405e-bf68-360de2267ed0.jpg',
      category: 'Свадьба',
      year: '2024'
    },
    {
      id: 'corporate-tech',
      title: 'Корпоратив IT-компании',
      subtitle: 'Новогоднее мероприятие',
      location: 'Москва, лофт-пространство',
      budget: '720 000 ₽',
      guests: 150,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/df7887b0-d57c-48b0-9bc7-c05960ef0ecc.jpg',
      category: 'Корпоратив',
      year: '2024'
    },
    {
      id: 'birthday-50th',
      title: 'Юбилей в ресторане',
      subtitle: 'Празднование 50-летия',
      location: 'Санкт-Петербург, классический ресторан',
      budget: '380 000 ₽',
      guests: 50,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/9e099256-58fc-4ae0-83fe-35ffba161e74.jpg',
      category: 'Юбилей',
      year: '2024'
    },
    {
      id: 'wedding-beach-sochi',
      title: 'Свадьба на побережье',
      subtitle: 'Церемония у моря',
      location: 'Сочи, пляжная зона',
      budget: '650 000 ₽',
      guests: 45,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b721589b-e086-4bbf-8c4f-e2840f521ca6.jpg',
      category: 'Свадьба',
      year: '2024'
    },
    {
      id: 'proposal-rooftop',
      title: 'Предложение на крыше',
      subtitle: 'Романтический вечер',
      location: 'Москва, панорамная площадка',
      budget: '120 000 ₽',
      guests: 2,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/556d7849-48bf-49a2-9ee0-7ffe5b156bf5.jpg',
      category: 'Романтика',
      year: '2024'
    },
    {
      id: 'birthday-kids-harry-potter',
      title: 'Детский день рождения',
      subtitle: 'Тематическая вечеринка',
      location: 'Москва, детское пространство',
      budget: '95 000 ₽',
      guests: 20,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/baf04995-1a05-4f19-88ab-c0860654b0d5.jpg',
      category: 'Детский праздник',
      year: '2024'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="cases" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-black via-muted/10 to-black relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in">
          <p className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Портфолио</p>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-light text-champagne mb-4 md:mb-6">
            Примеры <span className="text-gold">моих</span> работ
          </h3>
          <p className="text-sm md:text-lg lg:text-xl text-champagne/70 max-w-2xl mx-auto px-4">
            Реальные мероприятия с детальным описанием и бюджетами
          </p>
        </div>

        <div className="relative">
          {/* Основной слайд */}
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl mb-6 md:mb-8">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
              <img 
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover animate-fade-in"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-8 lg:p-16">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <span className="px-3 md:px-4 py-1 md:py-1.5 bg-gold/90 text-black text-xs md:text-sm font-medium rounded-full">
                      {currentCase.category}
                    </span>
                    <span className="px-3 md:px-4 py-1 md:py-1.5 bg-black/70 backdrop-blur-sm border border-gold/30 text-gold text-xs md:text-sm rounded-full">
                      {currentCase.year}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl lg:text-5xl font-light text-champagne mb-2 md:mb-3">
                    {currentCase.title}
                  </h4>
                  <p className="text-base md:text-lg lg:text-xl text-champagne/80 mb-6 md:mb-8">
                    {currentCase.subtitle}
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-lg md:rounded-xl p-3 md:p-4">
                      <Icon name="MapPin" size={16} className="text-gold mb-1 md:mb-2 md:w-5 md:h-5" />
                      <p className="text-champagne/60 text-[10px] md:text-xs mb-1">Локация</p>
                      <p className="text-champagne text-xs md:text-sm font-medium line-clamp-2">{currentCase.location}</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-lg md:rounded-xl p-3 md:p-4">
                      <Icon name="Wallet" size={16} className="text-gold mb-1 md:mb-2 md:w-5 md:h-5" />
                      <p className="text-champagne/60 text-[10px] md:text-xs mb-1">Бюджет</p>
                      <p className="text-champagne text-xs md:text-sm font-medium">{currentCase.budget}</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-lg md:rounded-xl p-3 md:p-4">
                      <Icon name="Users" size={16} className="text-gold mb-1 md:mb-2 md:w-5 md:h-5" />
                      <p className="text-champagne/60 text-[10px] md:text-xs mb-1">Гостей</p>
                      <p className="text-champagne text-xs md:text-sm font-medium">{currentCase.guests} человек</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-lg md:rounded-xl p-3 md:p-4">
                      <Icon name="Clock" size={16} className="text-gold mb-1 md:mb-2 md:w-5 md:h-5" />
                      <p className="text-champagne/60 text-[10px] md:text-xs mb-1">Подготовка</p>
                      <p className="text-champagne text-xs md:text-sm font-medium">3-4 месяца</p>
                    </div>
                  </div>

                  <Link to={`/case/${currentCase.id}`}>
                    <Button size="lg" className="bg-gold text-black hover:bg-champagne text-sm md:text-base px-4 md:px-6 h-10 md:h-12">
                      Смотреть полный кейс
                      <Icon name="ArrowRight" size={16} className="ml-2 md:w-[18px] md:h-[18px]" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold/20 flex items-center justify-center transition-all"
            >
              <Icon name="ChevronLeft" size={20} className="text-gold md:w-6 md:h-6" />
            </button>

            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-gold' 
                      : 'w-2 bg-gold/30 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold/20 flex items-center justify-center transition-all"
            >
              <Icon name="ChevronRight" size={20} className="text-gold md:w-6 md:h-6" />
            </button>
          </div>

          {/* Превью других кейсов */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {cases.map((caseItem, index) => {
              if (index === currentIndex) return null;
              
              return (
                <button
                  key={caseItem.id}
                  onClick={() => goToSlide(index)}
                  className="group relative overflow-hidden rounded-lg md:rounded-xl aspect-square hover:scale-105 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-all"></div>
                  <img 
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                    <p className="text-champagne text-xs font-medium line-clamp-2">
                      {caseItem.title}
                    </p>
                    <p className="text-gold text-xs mt-1">{caseItem.budget}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;