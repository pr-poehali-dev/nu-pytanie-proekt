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
      title: 'Свадьба мечты в усадьбе',
      subtitle: 'Анна и Дмитрий',
      location: 'Московская область, усадьба "Архангельское"',
      budget: '1 200 000 ₽',
      guests: 85,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
      category: 'Свадьба',
      year: '2025'
    },
    {
      id: 'corporate-tech',
      title: 'Новогодний корпоратив IT-компании',
      subtitle: 'TechCorp 200 сотрудников',
      location: 'Москва, лофт "Красный Октябрь"',
      budget: '850 000 ₽',
      guests: 200,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
      category: 'Корпоратив',
      year: '2025'
    },
    {
      id: 'birthday-50th',
      title: 'Юбилей 50 лет в ресторане',
      subtitle: 'Семейное торжество Марии',
      location: 'Санкт-Петербург, ресторан "Палкин"',
      budget: '450 000 ₽',
      guests: 60,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/16676814-acdc-4d68-ac49-4f273e16c44d.jpg',
      category: 'Юбилей',
      year: '2025'
    },
    {
      id: 'wedding-beach-sochi',
      title: 'Свадьба на берегу моря',
      subtitle: 'Елена и Максим',
      location: 'Сочи, пляжный клуб "Riviera"',
      budget: '720 000 ₽',
      guests: 50,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/c16418a8-e802-4ecf-8d93-d9eb83527d58.jpg',
      category: 'Свадьба',
      year: '2026'
    },
    {
      id: 'proposal-rooftop',
      title: 'Предложение руки и сердца',
      subtitle: 'Романтический вечер Игоря',
      location: 'Москва, крыша отеля "Метрополь"',
      budget: '180 000 ₽',
      guests: 2,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/7dfd9622-034e-41ba-9ee1-5873cbaace8c.jpg',
      category: 'Романтика',
      year: '2025'
    },
    {
      id: 'birthday-kids-harry-potter',
      title: 'День рождения в стиле "Гарри Поттер"',
      subtitle: 'Праздник Софии, 10 лет',
      location: 'Москва, детский клуб "Wonderland"',
      budget: '140 000 ₽',
      guests: 25,
      image: 'https://cdn.poehali.dev/projects/de9015d2-43e5-4979-bf59-270d4334d15d/files/b7b648fd-f54f-487f-b94a-5b6d5ecad179.jpg',
      category: 'Детский праздник',
      year: '2025'
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
    <section id="cases" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black via-muted/10 to-black relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Портфолио</p>
          <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
            Истории <span className="text-gold">реализованных</span> событий
          </h3>
          <p className="text-xl text-champagne/70 max-w-2xl mx-auto">
            Каждый проект — реальные цифры, детали и впечатления клиентов
          </p>
        </div>

        <div className="relative">
          {/* Основной слайд */}
          <div className="relative overflow-hidden rounded-3xl mb-8">
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
              <img 
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover animate-fade-in"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-16">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-gold/90 text-black text-sm font-medium rounded-full">
                      {currentCase.category}
                    </span>
                    <span className="px-4 py-1.5 bg-black/70 backdrop-blur-sm border border-gold/30 text-gold text-sm rounded-full">
                      {currentCase.year}
                    </span>
                  </div>

                  <h4 className="text-4xl lg:text-5xl font-light text-champagne mb-3">
                    {currentCase.title}
                  </h4>
                  <p className="text-xl text-champagne/80 mb-8">
                    {currentCase.subtitle}
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
                      <Icon name="MapPin" size={20} className="text-gold mb-2" />
                      <p className="text-champagne/60 text-xs mb-1">Локация</p>
                      <p className="text-champagne text-sm font-medium">{currentCase.location}</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
                      <Icon name="Wallet" size={20} className="text-gold mb-2" />
                      <p className="text-champagne/60 text-xs mb-1">Бюджет</p>
                      <p className="text-champagne text-sm font-medium">{currentCase.budget}</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
                      <Icon name="Users" size={20} className="text-gold mb-2" />
                      <p className="text-champagne/60 text-xs mb-1">Гостей</p>
                      <p className="text-champagne text-sm font-medium">{currentCase.guests} человек</p>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
                      <Icon name="Clock" size={20} className="text-gold mb-2" />
                      <p className="text-champagne/60 text-xs mb-1">Подготовка</p>
                      <p className="text-champagne text-sm font-medium">6 месяцев</p>
                    </div>
                  </div>

                  <Link to={`/case/${currentCase.id}`}>
                    <Button size="lg" className="bg-gold text-black hover:bg-champagne">
                      Смотреть полный кейс
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold/20 flex items-center justify-center transition-all"
            >
              <Icon name="ChevronLeft" size={24} className="text-gold" />
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
              className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 hover:bg-gold/20 flex items-center justify-center transition-all"
            >
              <Icon name="ChevronRight" size={24} className="text-gold" />
            </button>
          </div>

          {/* Превью других кейсов */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {cases.map((caseItem, index) => {
              if (index === currentIndex) return null;
              
              return (
                <button
                  key={caseItem.id}
                  onClick={() => goToSlide(index)}
                  className="group relative overflow-hidden rounded-xl aspect-square hover:scale-105 transition-all"
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
