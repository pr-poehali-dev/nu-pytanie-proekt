import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CityData {
  name: string;
  events: number;
  position: { x: number; y: number };
  examples: string[];
  features: string[];
  specialNote?: string;
}

const InteractiveMap = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities: CityData[] = [
    {
      name: 'Москва',
      events: 45,
      position: { x: 42, y: 35 },
      examples: ['Свадьба в Музеоне', 'Корпоратив в Лофте', 'Юбилей в усадьбе Царицыно'],
      features: ['Премиум-локации', 'Топовые подрядчики', 'Любой бюджет'],
      specialNote: 'Столица возможностей — от камерных встреч до масштабных мероприятий'
    },
    {
      name: 'Санкт-Петербург',
      events: 32,
      position: { x: 38, y: 25 },
      examples: ['Свадьба в Петергофе', 'Вечер на крыше с видом на Неву', 'Банкет в историческом особняке'],
      features: ['Историческая роскошь', 'Уникальные площадки', 'Белые ночи'],
      specialNote: 'Северная Венеция — идеальна для романтических церемоний'
    },
    {
      name: 'Сочи',
      events: 28,
      position: { x: 48, y: 68 },
      examples: ['Пляжная церемония на закате', 'Горная свадьба в Красной Поляне', 'Яхт-вечеринка'],
      features: ['Море и горы', 'Круглый год', 'Идеально для свадеб'],
      specialNote: 'Черноморская жемчужина — природа круглый год'
    },
    {
      name: 'Крым',
      events: 21,
      position: { x: 52, y: 60 },
      examples: ['Свадьба в винодельне Массандра', 'Торжество в Ливадийском дворце', 'Вечер на набережной'],
      features: ['Винные туры', 'Дворцы и парки', 'Южный колорит'],
      specialNote: 'Полуостров мечты — история, вино и море в одном месте'
    },
    {
      name: 'Казань',
      events: 18,
      position: { x: 65, y: 38 },
      examples: ['Никах в мечети Кул-Шариф', 'Банкет на берегу Казанки', 'Корпоратив в креативном пространстве'],
      features: ['Восточный колорит', 'Две культуры', 'Гастрономия'],
      specialNote: 'Третья столица — слияние европейского и восточного стилей'
    },
    {
      name: 'Екатеринбург',
      events: 15,
      position: { x: 80, y: 35 },
      examples: ['Свадьба в лофт-пространстве', 'Корпоратив в горах', 'Юбилей в ресторане с панорамой'],
      features: ['Урал', 'Индустриальный шик', 'Природа рядом'],
      specialNote: 'Столица Урала — индустриальный шик встречает природу'
    },
    {
      name: 'Калининград',
      events: 12,
      position: { x: 22, y: 38 },
      examples: ['Европейская свадьба в замке', 'Вечеринка у моря', 'Торжество в Кафедральном соборе'],
      features: ['Европейский дух', 'Балтийское море', 'Янтарный край'],
      specialNote: 'Маленькая Европа — архитектура Кёнигсберга и Балтика'
    },
    {
      name: 'Владивосток',
      events: 10,
      position: { x: 180, y: 50 },
      examples: ['Свадьба на берегу Японского моря', 'Корпоратив с видом на мосты', 'Вечер в азиатском стиле'],
      features: ['Океан', 'Азиатский колорит', 'Город мостов'],
      specialNote: 'Ворота на Восток — океан, сопки и азиатский колорит'
    },
    {
      name: 'Нижний Новгород',
      events: 14,
      position: { x: 55, y: 38 },
      examples: ['Свадьба в Кремле', 'Прогулка на теплоходе', 'Банкет в усадьбе'],
      features: ['Две реки', 'Историческое наследие', 'Волга'],
      specialNote: 'Столица Поволжья — слияние Волги и Оки'
    },
    {
      name: 'Ростов-на-Дону',
      events: 11,
      position: { x: 50, y: 58 },
      examples: ['Свадьба в казачьем стиле', 'Вечер на набережной Дона', 'Корпоратив в винодельне'],
      features: ['Донской колорит', 'Южное гостеприимство', 'Казачья культура'],
      specialNote: 'Ворота Кавказа — южное гостеприимство и казачий дух'
    },
    {
      name: 'Новосибирск',
      events: 13,
      position: { x: 105, y: 38 },
      examples: ['Зимняя свадьба в тайге', 'Корпоратив на острове', 'Торжество в театре'],
      features: ['Сибирь', 'Современные площадки', 'Контраст природы и города'],
      specialNote: 'Столица Сибири — мощь природы и урбанистика'
    },
    {
      name: 'Краснодар',
      events: 16,
      position: { x: 48, y: 62 },
      examples: ['Свадьба в виноградниках', 'Вечер в казачьей усадьбе', 'Корпоратив в современном лофте'],
      features: ['Кубанское гостеприимство', 'Юг России', 'Винные маршруты'],
      specialNote: 'Кубанская столица — щедрая земля и гостеприимство'
    }
  ];

  const selectedCityData = cities.find(c => c.name === selectedCity);

  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">География</p>
          <h3 className="text-5xl lg:text-6xl font-light text-champagne mb-6">
            Работаю по всей <span className="text-gold">России</span>
          </h3>
          <p className="text-xl text-champagne/70 mb-4">
            12 городов от Калининграда до Владивостока
          </p>
          <p className="text-sm text-champagne/50">
            Нажмите на город, чтобы узнать подробности
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative lg:sticky lg:top-24">
            <div className="relative w-full neumorphic rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-gold/5 to-purple-600/5" style={{ height: '600px' }}>
              <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))' }}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(212, 175, 55, 0.25)', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: 'rgba(138, 43, 226, 0.2)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(79, 70, 229, 0.25)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Упрощённый контур России с большим охватом */}
                <path
                  d="M 20 45 L 25 38 L 35 33 L 45 30 L 60 28 L 80 27 L 100 28 L 120 30 L 140 33 L 160 38 L 175 43 L 185 50 L 188 58 L 185 65 L 175 70 L 160 73 L 140 72 L 120 70 L 100 68 L 85 72 L 70 77 L 55 79 L 40 77 L 30 70 L 23 60 L 20 50 Z"
                  fill="url(#mapGradient)"
                  stroke="rgba(212, 175, 55, 0.6)"
                  strokeWidth="1.5"
                  className="transition-all"
                />
                
                {/* Города с пульсацией */}
                {cities.map((city) => {
                  const x = city.position.x;
                  const y = city.position.y;
                  
                  return (
                    <g key={city.name}>
                      {/* Пульсирующий круг при выборе */}
                      {selectedCity === city.name && (
                        <>
                          <circle
                            cx={x}
                            cy={y}
                            r="25"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="0.5"
                            opacity="0.2"
                            className="animate-ping"
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r="18"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="1"
                            opacity="0.4"
                            className="animate-pulse"
                          />
                        </>
                      )}
                      
                      {/* Основная точка города */}
                      <circle
                        cx={x}
                        cy={y}
                        r={selectedCity === city.name ? '5' : '3.5'}
                        fill={selectedCity === city.name ? '#D4AF37' : 'rgba(212, 175, 55, 0.9)'}
                        className="cursor-pointer transition-all hover:scale-150"
                        onClick={() => setSelectedCity(city.name)}
                        stroke="#000"
                        strokeWidth="0.8"
                      />
                      
                      {/* Внешнее кольцо */}
                      <circle
                        cx={x}
                        cy={y}
                        r="7"
                        fill="transparent"
                        stroke="rgba(212, 175, 55, 0.5)"
                        strokeWidth="1"
                        className="cursor-pointer transition-all hover:scale-125"
                        onClick={() => setSelectedCity(city.name)}
                      />
                      
                      {/* Название города */}
                      <text
                        x={x}
                        y={y - 10}
                        fill="rgba(212, 175, 55, 1)"
                        fontSize="5"
                        textAnchor="middle"
                        className="font-medium pointer-events-none select-none"
                        style={{ textShadow: '0 0 6px rgba(0, 0, 0, 1), 0 0 3px rgba(0, 0, 0, 1)' }}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
              
              {/* Статистика */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-gold/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-light text-gold mb-1">12</div>
                <div className="text-xs text-champagne/70">городов</div>
              </div>
              
              {/* Легенда */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-gold/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-champagne/70 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gold animate-pulse"></div>
                  <span>Кликните на город</span>
                </div>
                <div className="text-[10px] text-champagne/50">
                  185+ мероприятий по России
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {selectedCityData ? (
              <div className="holographic-card rounded-3xl p-10 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-4xl font-light text-champagne">{selectedCityData.name}</h4>
                  <button
                    onClick={() => setSelectedCity(null)}
                    className="text-champagne/50 hover:text-champagne transition-colors"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="CheckCircle2" size={20} className="text-gold" />
                    <span className="text-gold text-xl font-medium">{selectedCityData.events} мероприятий</span>
                  </div>
                  {selectedCityData.specialNote && (
                    <p className="text-champagne/60 italic text-sm leading-relaxed">
                      {selectedCityData.specialNote}
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <p className="text-champagne/70 text-sm mb-4 font-medium">Примеры проектов:</p>
                  <div className="space-y-3">
                    {selectedCityData.examples.map((example, i) => (
                      <div key={i} className="flex items-start gap-3 bg-black/30 rounded-lg p-3">
                        <Icon name="Sparkles" size={16} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-champagne text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-champagne/70 text-sm mb-4 font-medium">Особенности:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCityData.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-champagne text-sm hover:bg-gold/20 transition-all"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gold/20">
                  <a href="#contact" className="text-gold hover:text-champagne transition-colors flex items-center gap-2 text-sm font-medium">
                    Обсудить мероприятие в {selectedCityData.name}
                    <Icon name="ArrowRight" size={16} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="neumorphic rounded-3xl p-12 text-center">
                <Icon name="Map" size={48} className="text-gold/30 mx-auto mb-6" />
                <h4 className="text-2xl font-light text-champagne mb-4">
                  Выберите город на карте
                </h4>
                <p className="text-champagne/60 leading-relaxed max-w-md mx-auto">
                  Кликните на любую точку, чтобы узнать о проектах, особенностях и возможностях организации событий в этом городе
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gold/5 rounded-xl p-4">
                    <div className="text-2xl font-light text-gold mb-1">185+</div>
                    <div className="text-xs text-champagne/60">Реализованных событий</div>
                  </div>
                  <div className="bg-gold/5 rounded-xl p-4">
                    <div className="text-2xl font-light text-gold mb-1">12</div>
                    <div className="text-xs text-champagne/60">Городов России</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
